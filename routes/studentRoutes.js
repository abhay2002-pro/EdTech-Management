import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentControllers.js";
import { isAuthorised } from "../middlewares/authorization.js";
import { createStudentValidation } from "../validators/studentValidators.js";

const router = express.Router();

router.route("/student").post(createStudentValidation, isAuthorised,createStudent);
router.route("/student").get(isAuthorised, getAllStudents);

export default router;