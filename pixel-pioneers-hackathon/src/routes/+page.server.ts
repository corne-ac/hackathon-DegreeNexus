import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';

const prisma = new PrismaClient();

async function getRecord() {
	const record = await prisma.user.findFirst();
	return record;
}

export const load: PageServerLoad = async () => {
	const a = await getRecord();
	console.log(a);
	return { rows: a };
};
