import { PrismaClient } from '@prisma/client/edge';
import * as dotenv from 'dotenv'

function getPrismaClient() {
  dotenv.config() // Load the environment variables
  // Need to lazy load the Prisma Client as it relies on environment variables
  return new PrismaClient();
}

// Create a new singleton Prisma Client instance
export const db = getPrismaClient();

