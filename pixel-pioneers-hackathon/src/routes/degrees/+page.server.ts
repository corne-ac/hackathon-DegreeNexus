import { db } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const degrees = await db.degree.findMany({
			take: 10,
			include: {
				tags: {
					take: 3
				},
				University: { select: { name: true } }
			}
			// offset uit figure
		});
		console.log(degrees);
		return { degrees: degrees };
	} catch (e: any) {
		return {
			degrees: [],
			error: {
				name: e.name,
				message: e.message,
				stack: e.stack
			}
		};
	} finally {
		await db.$disconnect();
	}
};
