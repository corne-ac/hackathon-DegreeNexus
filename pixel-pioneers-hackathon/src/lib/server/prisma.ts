import { PrismaClient } from '@prisma/client';
// import * as dotenv from 'dotenv';
import { DATABASE_URL } from "$env/static/private";

function getPrismaClient() {
  dotenv.config();
        // if (process.env.SVELTE_ENV === 'development') {
    //   import('dotenv').then((value) => value.config());
    // }
    // Need to lazy load the Prisma Client as it relies on environment variables
    return new PrismaClient();
}
// export const db = getPrismaClient();


// Create a new singleton Prisma Client instance
export const db = new PrismaClient({
    datasources: {
        db: {
            url: DATABASE_URL,
        }
    }
});