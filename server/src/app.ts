import express from 'express';
import cors from 'cors';
import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/error.js';
import { metricRouter } from './routers/metric.js';
import { reportRouter } from './routers/report.js';

export const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/metrics', metricRouter);
app.use('/reports', reportRouter);
app.use(errorHandler);
