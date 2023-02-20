import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import School from "../models/School.js";
import ErrorHandler from "../utils/errorHandler.js";
import lookup from "country-code-lookup";

export const createSchool = catchAsyncError(async (req, res, next) => {
  const { name, city, state, country } = req.body;

  const exists = await School.findOne({ where: { name: name } });
  if (exists) return next(new ErrorHandler("School exists already", 404));

  const countryCode = lookup.byCountry(country).fips;

  const school = await School.create({ name, city, state, country: countryCode });
  res.status(200).json({
    status: true,
    content: {
      data: school,
    },
  });
});

export const getAllSchools = catchAsyncError(async (req, res, next) => {
  const schools = await School.findAll({});

  res.status(200).json({
    status: true,
    content: {
      data: schools,
    },
  });
});
