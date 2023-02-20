import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import User from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import bcrypt from "bcrypt";
import { v4, validate } from "uuid";

export const signup = catchAsyncError(async (req, res, next) => {
  const { first_name, last_name, email, mobile, password, roleId } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  
  const role = await User.create({
    first_name,
    last_name,
    email,
    mobile,
    password: encryptedPassword,
    roleid: roleId,
  });

  res.status(200).json({
    status: true,
    content: {
      data: role,
    },
  });
});
