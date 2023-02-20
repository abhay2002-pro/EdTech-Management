import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import School from "../models/School.js";
import Role from "../models/Role.js";
import ErrorHandler from "../utils/errorHandler.js";
import lookup from "country-code-lookup";
import Student from "../models/Student.js";

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

export const getAllSchoolsAllStudents = catchAsyncError(async (req, res, next) => {
  const role = await Role.findOne({where: {id : req.roleId}});
  const scopes = role.scopes;

  if(!scopes.includes("school-students")){
    return next(new ErrorHandler("User doesn't have access to this resource", 404));
  }
  
  let schools = await School.findAll({});

  schools = await Promise.all(
    schools.map(async (school) => {
      let students = await Student.findAll({where: {schoolid: school.id}})
      return {
        id: school.id,
        name: school.name,
        city: school.city,
        state: school.state,
        country: school.country,
        created: school.created,
        updated: school.updated,
        students,
      };
    })
  );
  console.log(schools);

  res.status(200).json({
    status: true,
    content: {
      data: schools,
    },
  });
});
