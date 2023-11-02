import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/prisma.server';

async function getRecord() {
	return await db.degree.findMany();
}

export const load: PageServerLoad = async () => {
	try {
		const r = await getRecord();
		return { record: r, error: null }; // Indicate success
	} catch (e: any) {
		return {
			record: null,
			error: {
				name: e.name,
				message: e.message,
				stack: e.stack
			}
		};
	} finally {
		db.$disconnect();
	}
};

// Saves the theme when the user clicks the theme button. A cookie will be returned to the client with the data. The cookie will be used to set the theme on the client.
// A cookie is used as it will be loaded before the page is rendered. This prevents the page from rendering with the default theme and then switching to the selected theme.

export const actions: Actions = {
	// This action is called when the user clicks the theme button
	setTheme: async ({ cookies, request }) => {
		const formData = await request.formData();
		const theme = formData.get('theme')?.toString() ?? 'wintry';
		// Sets the selected theme to the cookie
		cookies.set('theme', theme, { path: '/' });
		return { theme };
	}
};
