import type { PageServerLoad } from './$types';
import { db } from '$lib/server/prisma';

export const load: PageServerLoad = async (event) => {
	let tags = await db.tag.findMany({});

	let degrees = await db.user.findFirst({
		select: {
			favoriteDegrees: true
		},
		where: {
			id: event.locals.user?.id
		}
	});
	if (degrees?.favoriteDegrees) return { rows: degrees?.favoriteDegrees , tags: tags };
	else return { rows: [], empty: true };
};
