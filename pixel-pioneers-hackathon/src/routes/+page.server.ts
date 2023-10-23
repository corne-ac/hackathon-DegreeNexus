import type { PageServerLoad } from './$types';

import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client/edge';

let prisma = new PrismaClient({
	datasourceUrl: env.DATABASE_URL
});

async function getRecord() {
	return await prisma.degree.findMany();
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
	}
};
