import type { Actions } from '@sveltejs/kit';
import * as bcrypt from 'bcryptjs';
import { LoginUserSchema } from '$lib/validations/user.schema';
import { signJWT } from '$lib/server/token';
import { JWT_EXPIRES_IN } from '$env/static/private';
import { db } from '$lib/server/prisma.server';

export const actions: Actions = {
	// This action is called when the user clicks the theme button
	login: async ({ cookies, request }) => {
		// Convert the form data into a JS object.
		const formObj = Object.fromEntries(await request.formData());
		const validationResult = await LoginUserSchema.safeParseAsync(formObj);
		if (!validationResult.success) {
			let messages = validationResult.error.flatten().fieldErrors;
			console.log(messages);
			// We want to remove the current password values from the form data before returning it.
			delete formObj.password;
			return { errors: messages, data: formObj };
		}
		let formData = validationResult.data;

		// Get the user from the db.
		const user = await db.user.findUnique({ where: { email: formData.email } });

		if (!user) {
			return { errors: { password: ['Username or Password is incorrect'] }, data: formObj };
		}
		const passwordsMatch = await bcrypt.compare(formData.password, user.password);
		if (!passwordsMatch) {
			return { errors: { password: ['Username or Password is incorrect'] }, data: formObj };
		}

		console.log('User:', user);

		// Here will generate the JWT token and send it back to the client.
		const token = await signJWT({ sub: user.id }, { exp: `${JWT_EXPIRES_IN}m` });
		const tokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60 * 24 * 7;

		const cookieOptions = {
			httpOnly: true,
			path: '/',
			secure: process.env.SVELTE_ENV !== 'development',
			maxAge: tokenMaxAge
		};

		console.log('Token:', token);

		cookies.set('token', token, cookieOptions);
	}
};
