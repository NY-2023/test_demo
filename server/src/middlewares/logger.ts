import type { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction): void {
  console.log(`Handling new '${req.method}' request from '${req.hostname}'`);
  next();
}
