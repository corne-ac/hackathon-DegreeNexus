import { PrismaClient } from '@prisma/client/edge';
// @ts-ignore
// import { DATABASE_URL, DIRECT_URL } from '$env/static/private';
import * as dotenv from 'dotenv';

function getPrismaClient() {
  dotenv.config();
		// if (process.env.SVELTE_ENV === 'development') {
    //   import('dotenv').then((value) => value.config());
    // }
	// Need to lazy load the Prisma Client as it relies on environment variables
	return new PrismaClient();
}

// Create a new singleton Prisma Client instance
/*export const db = new PrismaClient({
	datasources: {
		db: {
			url: DATABASE_URL,
		}
	}
});*/

export const db = getPrismaClient();