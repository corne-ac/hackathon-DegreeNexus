import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	let theme = '';
	const cookieTheme = event.cookies.get('theme');
	if (cookieTheme) {
		theme = cookieTheme;
	} else {
		event.cookies.set('theme', 'wintry');
		theme = 'wintry';
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme="wintry"', `data-theme="${theme}"`)
	});
};