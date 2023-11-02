import type { PageServerLoad } from './$types';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load: PageServerLoad = async (event: ServerLoadEvent) => {
	let user = event.locals.user;
	return { user: user };
};
