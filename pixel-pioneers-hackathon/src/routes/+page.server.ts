// import {PrismaClient} from '@prisma/client'
import { PrismaClient } from '@prisma/client/edge'
import type {PageServerLoad} from './$types';
import {withAccelerate} from "@prisma/extension-accelerate";

// const prisma = new PrismaClient();
const prisma = new PrismaClient().$extends(withAccelerate())


async function getRecord() {
    return await prisma.user.findFirst();
}

export const load: PageServerLoad = async () => {
    try {
        const a = await getRecord();
        console.log(a);
        return {rows: a};

    } catch (error) {
        console.log(error);
        return {"error": error};
    }
};