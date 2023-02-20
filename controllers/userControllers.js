import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import User from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import bcrypt from "bcrypt";
import Role from "../models/Role.js";

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

export const signin = catchAsyncError(async (req, res, next) => {
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

export const getAllUsers = catchAsyncError(async (req, res, next) => {
  const role = await Role.findOne({where: {id : req.roleId}});
  const scopes = role.scopes;

  if(!scopes.includes("user-get")){
    return next(new ErrorHandler("User doesn't have access to this resource", 404));
  }

  const users = await User.findAll({});
  res.status(200).json({
    status: true,
    content: {
      data: users,
    },
  });
});

export const getSingleUser = catchAsyncError(async (req, res, next) => {
  const role = await Role.findOne({where: {id : req.roleId}});
  const scopes = role.scopes;

  if(!scopes.includes("user-get")){
    return next(new ErrorHandler("User doesn't have access to this resource", 404));
  }
  
  const user_id = req.params.id;
  const user = await User.findByPk(user_id);

  res.status(200).json({
    status: true,
    content: {
      data: user,
    },
  });
});
