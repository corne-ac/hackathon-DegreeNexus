import { PrismaClient } from "@prisma/client/edge";
import { env } from "$env/dynamic/private";

// Create a new singleton Prisma Client instance
export const db = new PrismaClient({
	datasourceUrl: env.DATABASE_URL
});
