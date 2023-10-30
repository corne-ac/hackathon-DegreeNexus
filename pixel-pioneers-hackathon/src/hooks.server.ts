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

export const authHandle: Handle = async ({ event, resolve }) => {
	const { url, locals, request, cookies } = event;

	let authToken: string | undefined;
	if (cookies.get('token')) {
		authToken = cookies.get('token');
	} else if (request.headers.get('Authorization')?.startsWith('Bearer ')) {
		authToken = request.headers.get('Authorization')?.substring(7);
	}

	locals.user = null;

	console.log('Auth Token:', authToken);

	return resolve(event);
};
