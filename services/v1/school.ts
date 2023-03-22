import School from "@models/v1/School";
import Student from "@models/v1/Student";
import { catchAsyncError } from "@utils/catchAsyncError";
import ErrorHandler from "@utils/errorHandler";
import lookup from "country-code-lookup";
import { NextFunction, Request, Response } from "express";

class SchoolService {
  static createSchool = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const { name, city, state } = req.body;
      const country: string = req.body.country ? req.body.country : "INDIA";

      const exists = await School.findOne({ where: { name: name } });
      if (exists) return next(new ErrorHandler("School exists already", 404));

      const countryCode = lookup.byCountry(country)?.fips;

      const school = await School.create({
        name,
        city,
        state,
        country: countryCode,
      });
      res.status(200).json({
        status: true,
        content: {
          data: school,
        },
      });
    }
  );
  static getAllSchools = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const schools = await School.findAll({});
  
      res.status(200).json({
        status: true,
        content: {
          data: schools,
        },
      });
    }
  );
  
  static getAllSchoolsAllStudents = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      let schools = await School.findAll({});
  
      schools = await School.findAll({
        include: [
          {
            model: Student,
            as: "Students",
          },
        ],
      });
  
      res.status(200).json({
        status: true,
        content: {
          data: schools,
        },
      });
    }
  )
}

export default SchoolService;