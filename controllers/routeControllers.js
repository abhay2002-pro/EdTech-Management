import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import Role from "../models/Role.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getRoles = catchAsyncError(async (req, res, next) => {
  const roles = Role.findAll();

  res.status(200).json({
    success: true,
    roles: roles,
  });
});
