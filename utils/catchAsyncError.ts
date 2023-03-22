import {Request, Response, NextFunction} from 'express'

export const catchAsyncError = (passedFunction: Function)=> (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(passedFunction(req, res, next)).catch(next);
};
