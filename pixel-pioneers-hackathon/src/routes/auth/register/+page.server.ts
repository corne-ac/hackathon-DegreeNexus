import type { Actions } from '@sveltejs/kit';
import type { RegisterUserInput } from '$lib/validations/user.schema';
import { RegisterUserSchema } from '$lib/validations/user.schema';

export const actions: Actions = {
	// This action is called when the user clicks the theme button
	register: async ({ cookies, request }) => {
		// const formData = await request.formData();
		try {
			let formData = await request.formData();
			formData.forEach((value, key) => {});

			const body = (await request.json()) as RegisterUserInput;
			const data = RegisterUserSchema.parse(body);
			return { Data: 'GOOD' };
		} catch (e) {
			return { error: 'BAD' };
		}
	}
};
