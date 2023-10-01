import type { Request, Response, NextFunction } from 'express';
import type { Metric } from '../models/metric';

import { Router } from 'express';
import { getAll, getOne } from '../services/metrics.js';
import { InternalServerError, NotFound, NotImplemented } from '../models/error.js';

export const metricRouter = Router();

metricRouter.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const metrics: Metric[] = await getAll();
    res.status(200).json(metrics);
  } catch (error) {
    next(InternalServerError);
  }
});

metricRouter.get('/:metricId', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const report = await getOne(req.params.metricId);
    if (report === undefined) {
      next(NotFound);
    }
    res.status(200).json(report);
  } catch (error) {
    next(InternalServerError);
  }
});

metricRouter.all('*', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  next(NotImplemented);
});
