import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ locals }) => {
	console.log(locals);

	try {
		const user = locals.user;

		if (!user) {
			return json(
				{
					message: 'You are not logged in, please provide token to gain access'
				},
				{ status: 401 }
			);
		}

		return json({ data: { ...user, password: undefined } });
	} catch (error: any) {
		return json({ message: error.message }, { status: 500 });
	}
};
