import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import Student from "../models/Student.js";
import Role from "../models/Role.js";
import ErrorHandler from "../utils/errorHandler.js";

export const createStudent = catchAsyncError(async (req, res, next) => {
  const role = await Role.findOne({where: {id : req.roleId}});
  const scopes = role.scopes;

  if(!scopes.includes("student-create")){
    return next(new ErrorHandler("User doesn't have access to this resource", 404));
  }

  const { name, userId, schoolId } = req.body;

  const exists = await Student.findOne({ where: { name: name } });
  if (exists) return next(new ErrorHandler("Student exists already", 404));

  const student = await Student.create({ name, userid: userId, schoolid: schoolId });
  res.status(200).json({
    status: true,
    content: {
      data: student,
    },
  });
});

export const getAllStudents = catchAsyncError(async (req, res, next) => {
  const role = await Role.findOne({where: {id : req.roleId}});
  const scopes = role.scopes;

  if(!scopes.includes("student-get")){
    return next(new ErrorHandler("User doesn't have access to this resource", 404));
  }

  const students = await Student.findAll({});
  res.status(200).json({
    status: true,
    content: {
      data: students,
    },
  });
});