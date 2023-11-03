import { db } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const university = await db.university.findUnique({
			where: {
				id: params.universityId
			}
		});

		const degrees = await db.degree.findMany({
			where: {
				universityId: params.universityId
			}
		});

		if (university != null) {
			return { university: university, degrees: degrees };
		}

		throw error(404, 'not found');
	} catch (e: any) {
		return {
			university: [],
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
