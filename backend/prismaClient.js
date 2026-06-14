import { createRequire } from 'module';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

const require = createRequire(import.meta.url);
const { PrismaClient } = require('@prisma/client');

dotenv.config();

const connectionString = process.env.DATABASE_URL;

let prisma;

if (connectionString) {
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  prisma = new PrismaClient({ adapter });
} else {
  prisma = new PrismaClient();
}

export default prisma;
