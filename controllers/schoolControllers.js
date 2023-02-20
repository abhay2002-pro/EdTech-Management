import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import School from "../models/School.js";
import Role from "../models/Role.js";
import ErrorHandler from "../utils/errorHandler.js";
import lookup from "country-code-lookup";

export const createSchool = catchAsyncError(async (req, res, next) => {
  const role = await Role.findOne({where: {id : req.roleId}});
  const scopes = role.scopes;

  if(!scopes.includes("school-create")){
    return next(new ErrorHandler("User doesn't have access to this resource", 404));
  }

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
  const role = await Role.findOne({where: {id : req.roleId}});
  const scopes = role.scopes;

  if(!scopes.includes("school-get")){
    return next(new ErrorHandler("User doesn't have access to this resource", 404));
  }
  
  const schools = await School.findAll({});

  res.status(200).json({
    status: true,
    content: {
      data: schools,
    },
  });
});
