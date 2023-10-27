import type { Actions } from '@sveltejs/kit';
import { RegisterUserSchema } from '$lib/validations/user.schema';
import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client/edge';

import * as argon2 from 'argon2';

let prisma = new PrismaClient({
	datasourceUrl: env.DATABASE_URL
});

export const actions: Actions = {
	// This action is called when the user clicks the theme button
	register: async ({ cookies, request }) => {
		// Convert the form data into a JS object.
		const formData = Object.fromEntries(await request.formData());
		const validationResult = RegisterUserSchema.safeParse(formData);

		// If the validation failed, return the errors and the form data.
		if (!validationResult.success) {
			console.log(validationResult.error);
			let messages = validationResult.error.flatten().fieldErrors;
			// We want to remove the current password and passwordConfirm values from the form data before returning it.
			delete formData.password;
			delete formData.passwordConfirm;
			return { errors: messages, data: formData };
		}

		let data = validationResult.data;

		// Validation passed, add the user to db and get a token.
		let passwordHash = await argon2.hash(data.password);

		console.log(passwordHash);
	}
};
