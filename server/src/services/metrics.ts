import type { Metric } from '../models/metric';

import { getClient } from '../clients/postgres.js';

export async function getAll(): Promise<Metric[]> {
  const retVal: Metric[] = [];
  const client = await getClient();
  try {
    const metricsQuery = await client.query(`SELECT * FROM metric ORDER BY created DESC`);
    for (const metric of metricsQuery.rows) {
      retVal.push({
        id: metric.id as string,
        name: metric.name as string
      });
    }
  } catch (e) {
    console.log(`Error retrieving metrics`);
  } finally {
    client.release();
  }
  return retVal;
}

export async function getOne(id: string): Promise<Metric | undefined> {
  let retVal: Metric | undefined;
  const client = await getClient();
  try {
    const metricsQuery = await client.query(`SELECT * FROM metric WHERE id=$1`, [id]);
    retVal = {
      id: metricsQuery.rows[0].id as string,
      name: metricsQuery.rows[0].name as string
    };
  } catch (e) {
    console.log(`Error retrieving metric with id ${id}`);
  } finally {
    client.release();
  }
  return retVal;
}
