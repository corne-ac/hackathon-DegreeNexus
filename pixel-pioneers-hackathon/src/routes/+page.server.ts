import {PrismaClient} from '@prisma/client/edge'
import type {PageServerLoad} from './$types';

let prisma: any = new PrismaClient();

async function getRecord() {
    return await prisma.user.findFirst();
}

export const load: PageServerLoad = async () => {
    try {
        const r = await getRecord();
        return {"record": r, "error": null}; // Indicate success
    } catch (e) {
        // @ts-ignore
        let err = {
            "name": e?.name,
            "message": e?.message,
            "stack": e?.stack,
        }

        return {"record": null, "error": JSON.stringify(err)};
    }
};
