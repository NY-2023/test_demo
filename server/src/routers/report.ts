import type { Request, Response, NextFunction } from 'express';

import { Router } from 'express';
import { getAll, getOne, createOne } from '../services/report.js';
import { InternalServerError, NotFound, NotImplemented } from '../models/error.js';

export const reportRouter = Router();

reportRouter.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const reports = await getAll();
    res.status(200).json(reports);
  } catch (error) {
    next(InternalServerError);
  }
});

reportRouter.get('/:reportId', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const report = await getOne(req.params.reportId);
    if (report === undefined) {
      next(NotFound);
    }
    res.status(200).json(report);
  } catch (error) {
    next(InternalServerError);
  }
});

reportRouter.post('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, description, answers } = req.body;
    const report = await createOne(name, description, answers);
    res.status(201).json(report);
  } catch (error) {
    next(InternalServerError);
  }
});

reportRouter.all('*', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  next(NotImplemented);
});
