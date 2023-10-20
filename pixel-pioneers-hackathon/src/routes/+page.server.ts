import { PrismaClient } from '@prisma/client'
import type {PageServerLoad} from './$types';

const prisma = new PrismaClient();

async function getRecord() {
    return await prisma.user.findFirst();
}

export const load: PageServerLoad = async () => {
    const a = await getRecord();
    console.log(a);
    return {rows: a};
};