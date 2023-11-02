import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { verifyJWT } from '$lib/server/token';

const themeHook = (async ({ event, resolve }) => {
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
}) satisfies Handle;

const authHook = (async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/protected')) {
		if (!event.locals.user) {
			let token = event.cookies.get('token');
			console.log('We have our token from the part ', token);
			if (token) {
				try {
					await verifyJWT(token);
					return resolve(event);
				} catch (error) {
					throw redirect(303, '/auth/login');
				}
			}

			throw redirect(303, '/auth/login');
		}
	}
	return resolve(event);
}) satisfies Handle;

// So the theme needs to be called after the auth hook as else the themes will not be set on auth pages
export const handle = sequence(authHook, themeHook);
