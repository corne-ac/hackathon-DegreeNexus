import type { Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client/edge';
// @ts-ignore
import * as bcrypt from 'bcryptjs';
import { LoginUserSchema } from '$lib/validations/user.schema';

let prisma = new PrismaClient({
	datasourceUrl: env.DATABASE_URL
});

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
		const user = await prisma.user.findUnique({ where: { email: formData.name } });
		if (!user) {
			return { errors: { password: ['Username or Password is incorrect'] }, data: formObj };
		}
		const passwordsMatch = await bcrypt.compare(formData.password, user.password);
		if (!passwordsMatch) {
			return { errors: { password: ['Username or Password is incorrect'] }, data: formObj };
		}


		// Get the user from the db.

		// Check the password.
		// let passwordsMatch = await bcrypt.compare(formData.password, hashedPassword);
		// console.log(passwordsMatch);

		// let data = validationResult.data;

		/*		bcrypt.genSalt(saltRounds, (err: any, salt: any) => {
          if (err) {
            console.error('Error generating salt:', err);
          } else {
            bcrypt.hash(formObj.password.toString(), salt, (err: any, hash: any) => {
              if (err) {
                console.error('Error hashing password:', err);
              } else {
                console.log('Hashed Password:', hash);
              }
            });
          }
        });*/

		// Validation passed, add the user to db and get a token.
	}
};
