import express from "express";
import {
  createSchool,
  getAllSchools,
  getAllSchoolsAllStudents,
} from "../controllers/schoolControllers";

const router = express.Router();

router.route("/school").post(createSchool);
router.route("/school").get(getAllSchools);
router.route("/school/students").get(getAllSchoolsAllStudents);

export default router;
