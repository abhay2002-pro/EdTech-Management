import express from "express";
import {
  createSchool,
  getAllSchools,
  getAllSchoolsAllStudents,
} from "../controllers/schoolControllers";
import { isAuthorised } from "../middlewares/authorization";

const router = express.Router();

router.route("/school").post(isAuthorised("school-create") ,createSchool);
router.route("/school").get(isAuthorised("school-get"), getAllSchools);
router.route("/school/students").get(isAuthorised("school-students"), getAllSchoolsAllStudents);

export default router;
