import type { Actions } from '@sveltejs/kit';
import { RegisterUserSchema } from '$lib/validations/user.schema';
import { redirect } from '@sveltejs/kit';


import { onMount } from 'svelte';


// @ts-ignore
import * as bcrypt from 'bcryptjs';
import { db } from '$lib/server/prisma';

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
		
	

		
		
		redirect(307, "/auth/login");
	
	
		//navigate to /auth/logina
		// Validation passed, add the user to db and get a token.
		// let passwordHash = await argon2.hash(data.password);

		// console.log(passwordHash);
	}
};
