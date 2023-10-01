import type { Report } from '../models/report';
import type { Answer } from '../models/answer';

import { getClient } from '../clients/postgres.js';

export async function getAll(): Promise<Report[]> {
  const retVal: Report[] = [];
  const client = await getClient();

  try {
    const result = await client.query(`SELECT * FROM report ORDER BY created DESC`);
    for (const report of result.rows) {
      retVal.push({
        id: report.id as string,
        name: report.name as string,
        description: report.description as string
      });
    }
  } catch (error) {
    console.log(`ERROR: Failed to retrieve reports from the database`);
  } finally {
    client.release();
  }

  return retVal;
}

export async function getOne(id: string): Promise<Report | undefined> {
  let retVal: Report | undefined;
  const client = await getClient();

  try {
    const { rows: report } = await client.query(`SELECT * FROM report WHERE id=$1`, [id]);

    const { rows: answers } = await client.query(`SELECT metric.id, metric.name, answer.value FROM answer INNER JOIN metric ON answer.metric_id = metric.id WHERE answer.report_id = $1`, [id]);

    retVal = {
      id: report[0].id as string,
      name: report[0].name as string,
      description: report[0].description as string,
      answers: answers.map((answer) => {
        return {
          id: answer.id,
          name: answer.name,
          value: answer.value
        };
      })
    };
  } catch (error) {
    console.log(`ERROR: Failed retrieving report with id ${id}`);
  } finally {
    client.release();
  }

  return retVal;
}

export async function createOne(name: string, description: string, answers: Answer[]): Promise<Report | undefined> {
  let id: string = '';
  const client = await getClient();
  try {
    await client.query('BEGIN');

    const { rows: report } = await client.query(`INSERT INTO report (name, description) VALUES ( $1, $2 ) RETURNING id`, [name, description]);

    id = report[0].id;

    for (const answer of answers) {
      await client.query(`INSERT INTO answer (value, report_id, metric_id) VALUES ( $1, $2, $3 ) RETURNING *`, [answer.value, id, answer.id]);
    }

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`ERROR: Failed to create new report`);
  } finally {
    client.release();
  }
  return await getOne(id);
}

export async function deleteOne(id: string): Promise<void> {
  const client = await getClient();
  try {
    await client.query('BEGIN');
    await client.query(`DELETE FROM answers WHERE report_id = $1`, [id]);
    await client.query(`DELETE FROM report WHERE id = $1`, [id]);
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`ERROR: Failed deleting report with id ${id}`);
  } finally {
    client.release();
  }
}
