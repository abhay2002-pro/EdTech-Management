import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentControllers.js";
import { createStudentValidation } from "../validators/studentValidators.js";

const router = express.Router();

router.route("/student").post(createStudentValidation, createStudent);
router.route("/student").get(getAllStudents);

export default router;