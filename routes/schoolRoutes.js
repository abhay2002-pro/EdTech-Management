import express from "express";
import {
  createSchool,
  getAllSchools,
  getAllSchoolsAllStudents,
} from "../controllers/schoolControllers.js";
import { isAuthorised } from "../middlewares/authorization.js";
import { createSchoolValidation } from "../validators/schoolValidators.js";

const router = express.Router();

router.route("/school").post(createSchoolValidation, isAuthorised, createSchool);
router.route("/school").get(isAuthorised, getAllSchools);
router.route("/school/students").get(isAuthorised, getAllSchoolsAllStudents);

export default router;
