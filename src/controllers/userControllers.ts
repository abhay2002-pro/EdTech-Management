import { catchAsyncError } from "../middlewares/catchAsyncError";
import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorHandler";
import User from "../models/User";
import bcrypt from "bcrypt";

export const signup = catchAsyncError(async (req:  Request, res: Response, next: NextFunction) => {
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

export const getAllUsers = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.findAll({});
    console.log(users);
    res.status(200).json({
      status: true,
      content: {
        data: users,
      },
    });
  }
);

export const getSingleUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const user_id = req.params.id;
    const isUUID =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89AB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i.test(
        user_id
      );
    if (!isUUID) {
      return next(new ErrorHandler("Invalid Id", 404));
    }

    const user = await User.findByPk(user_id);
    if (!user) {
      return next(new ErrorHandler("User not found in the database", 404));
    }
    res.status(200).json({
      status: true,
      content: {
        data: user,
      },
    });
  }
);

export const signin = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return next(new ErrorHandler("Incorrect Email", 404));

  if (!bcrypt.compareSync(password, user.password))
    return next(new ErrorHandler("Incorrect Password", 404));

  const accessToken = user.getJWTToken();

  res.status(200).json({
    status: true,
    content: {
      data: accessToken,
    },
  });
});