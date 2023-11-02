import type { Actions } from '@sveltejs/kit';
import { RegisterUserSchema } from '$lib/validations/user.schema';
import { redirect } from '@sveltejs/kit';

import * as bcrypt from 'bcryptjs';
import { db } from '$lib/server/prisma';
import { signJWT } from "$lib/server/token";
import { JWT_EXPIRES_IN } from "$env/static/private";

export const actions: Actions = {
	// This action is called when the user clicks the theme button
	register: async ({ cookies, request }) => {
		// Convert the form data into a JS object.
		const formObj = Object.fromEntries(await request.formData());
		const validationResult = RegisterUserSchema.safeParse(formObj);

		// If the validation failed, return the errors and the form data.
		if (!validationResult.success) {
			console.log(validationResult.error);
			let messages = validationResult.error.flatten().fieldErrors;
			// We want to remove the current password and passwordConfirm values from the form data before returning it.
			delete formObj.password;
			delete formObj.passwordConfirm;
			return { errors: messages, data: formObj };
		}

		let formData = validationResult.data;
		const hashedPassword = await bcrypt.hash(formData.password, 8);

		const user = await db.user.create({
			data: {
				name: formData.name,
				email: formData.email,
				password: hashedPassword
			}
		});

		// Here will generate the JWT token and send it back to the client.
		const token = await signJWT({ sub: user.id }, { exp: `${JWT_EXPIRES_IN}m` });
		const tokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60 * 24 * 7;

		const cookieOptions = {
			httpOnly: true,
			path: '/',
			secure: process.env.SVELTE_ENV !== 'development',
			maxAge: tokenMaxAge
		};

		cookies.set('token', token, cookieOptions);

		throw redirect(307, "/");
	
	
		//navigate to /auth/logina
		// Validation passed, add the user to db and get a token.
		// let passwordHash = await argon2.hash(data.password);

		// console.log(passwordHash);
	}
};
