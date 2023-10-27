import type { Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client/edge';
// @ts-ignore
import * as bcrypt from 'bcryptjs';

const saltRounds = 10;
let prisma = new PrismaClient({
	datasourceUrl: env.DATABASE_URL
});

export const actions: Actions = {
	// This action is called when the user clicks the theme button
	login: async ({ cookies, request }) => {
		// Convert the form data into a JS object.
		const formData = Object.fromEntries(await request.formData());
		// const validationResult = RegisterUserSchema.safeParse(formData);

		// If the validation failed, return the errors and the form data.
		/* if (!validationResult.success) {
       console.log(validationResult.error);
       let messages = validationResult.error.flatten().fieldErrors;
       // We want to remove the current password values from the form data before returning it.
       delete formData.password;
       return { errors: messages, data: formData };
     }*/

		// let data = validationResult.data;

		bcrypt.genSalt(saltRounds, (err: any, salt: any) => {
			if (err) {
				console.error('Error generating salt:', err);
			} else {
				bcrypt.hash(formData.password.toString(), salt, (err: any, hash: any) => {
					if (err) {
						console.error('Error hashing password:', err);
					} else {
						console.log('Hashed Password:', hash);
					}
				});
			}
		});

		// Validation passed, add the user to db and get a token.
	}
};
