import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../middlewares/catchAsyncError";
import Role from "../models/Role";
import ErrorHandler from "../utils/errorHandler";

export const createRole = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const {name, scopes} = req.body;
  
  const exists = await Role.findOne({ where: { name: name } });
  if (exists) return next(new ErrorHandler("Role exists already", 404));

  const role = await Role.create({ name, scopes });
  res.status(200).json({
    status: true,
    content: {
      data: role,
    },
  });
});

export const getRoles = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const roles = await Role.findAll({});
  res.status(200).json({
    status: true,
    content: {
      data: roles,
    },
  });
});
