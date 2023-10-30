import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = ({ cookies, locals }) => {
	console.log(locals.user);
	locals.user = null;
	console.log('Logout');

	const cookieOptions = {
		path: '/api',
		secure: process.env.SVELTE_ENV !== 'development'
	};

	cookies.delete('token', cookieOptions);

	return json({ status: 'success' });
};
