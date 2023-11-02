import type { PageServerLoad } from './$types';
import { db } from '$lib/server/prisma.server';

export const load: PageServerLoad = async (event) => {
	let degrees = await db.user.findFirst({
		select: {
			favoriteDegrees: true
		},
		where: {
			id: event.locals.user?.id
		}
	});
	if (degrees?.favoriteDegrees) return { rows: degrees?.favoriteDegrees };
	else return { rows: [], empty: true };
};
