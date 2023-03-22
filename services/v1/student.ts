import Student from "@models/v1/Student";
import { catchAsyncError } from "@utils/catchAsyncError";
import ErrorHandler from "@utils/errorHandler";
import { NextFunction, Request, Response } from "express";

class studentService {
  static createStudent = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const { name, userId, schoolId } = req.body;

      const exists = await Student.findOne({ where: { name: name } });
      if (exists) return next(new ErrorHandler("Student exists already", 404));

      const student = await Student.create({
        name,
        userid: userId,
        schoolid: schoolId,
      });
      res.status(200).json({
        status: true,
        content: {
          data: student,
        },
      });
    }
  );

  static getAllStudents = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const students = await Student.findAll({});
      res.status(200).json({
        status: true,
        content: {
          data: students,
        },
      });
    }
  );
}
