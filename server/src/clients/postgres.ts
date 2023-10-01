import type { Pool, PoolClient } from 'pg';

import pg from 'pg';

let pool: Pool;

function getPool(): Pool {
  if (pool === undefined) {
    pool = new pg.Pool({
      host: process.env['POSTGRES_HOST'] || 'localhost',
      database: process.env['POSTGRES_DB'] || 'poland',
      user: process.env['POSTGRES_USER'] || 'poland',
      password: process.env['POSTGRES_PASSWORD'] || 'verysecretpassword',
      port: Number(process.env['POSTGRES_PORT']) || 5432
    });
  }
  return pool;
}

export async function getClient(): Promise<PoolClient> {
  const client = await getPool().connect();
  return client;
}
