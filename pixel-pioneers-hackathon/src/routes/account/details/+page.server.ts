import type { Actions, PageServerLoad } from './$types';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { db } from '$lib/server/prisma';

export const load: PageServerLoad = async (event: ServerLoadEvent) => {
	let user = event.locals.user;
	return { user: user };
};

export const actions: Actions = {
	updateInfo: async ({ cookies, request, locals }) => {
		console.log('updateInfo');
		let data = await request.formData();
		let imageId = data.get('imageId');
		console.log(imageId);
		if (imageId) {
			await db.user.update({
				where: {
					id: locals.user?.id
				},
				data: {
					photo: imageId.toString()
				}
			});
		}
	}
};
