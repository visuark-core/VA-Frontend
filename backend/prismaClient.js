import { PrismaClient } from './generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const connectionString = process.env.DATABASE_URL;

let prisma;

if (connectionString) {
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  prisma = new PrismaClient({ adapter });
} else {
  // Fallback for when DATABASE_URL is not set
  console.warn('DATABASE_URL not found, initializing PrismaClient without adapter');
  prisma = new PrismaClient();
}

export default prisma;
