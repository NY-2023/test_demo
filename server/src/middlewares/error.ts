import type { Request, Response, NextFunction } from 'express';
import type { Error } from '../models/error';

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction): void {
  console.log(`ERROR ${error.code}: ${error.message}`);
  res.status(error.code).json({
    code: error.code,
    message: error.message
  });
}
