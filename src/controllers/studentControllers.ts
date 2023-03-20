import { catchAsyncError } from "../middlewares/catchAsyncError";
import { Request, Response, NextFunction } from "express";
import Student from "../models/Student";
import ErrorHandler from "../utils/errorHandler";

export const createStudent = catchAsyncError(async (req:  Request, res: Response, next: NextFunction) => {
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

export const getAllStudents = catchAsyncError(async (req:  Request, res: Response, next: NextFunction) => {
  const students = await Student.findAll({});
  res.status(200).json({
    status: true,
    content: {
      data: students,
    },
  });
});