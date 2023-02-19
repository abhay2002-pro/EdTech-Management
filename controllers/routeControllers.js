import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import Role from "../models/Role.js";
import ErrorHandler from "../utils/errorHandler.js";

export const createRole = catchAsyncError(async (req, res, next) => {
  const name = req.body.name;
  const scopes = req.body.scopes;
  
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

export const getRoles = catchAsyncError(async (req, res, next) => {
  const roles = await Role.findAll({});
  res.status(200).json({
    status: true,
    content: {
      data: roles,
    },
  });
});
