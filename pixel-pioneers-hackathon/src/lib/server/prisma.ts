import { PrismaClient } from '@prisma/client/edge';

function getPrismaClient() {
  // dotenv.config() // Load the environment variables
  if (process.env.SVELTE_ENV === 'development') {
    // import * as dotenv from 'dotenv'
    // type User = import('@prisma/client/edge').User;
    // import type * as dotenv from 'dotenv';

    // import('dotenv').*.config()
    import('dotenv').then(value => value.config())

    // dotenv.config()
  }
  // Need to lazy load the Prisma Client as it relies on environment variables
  return new PrismaClient();
}

// Create a new singleton Prisma Client instance
export const db = getPrismaClient();

