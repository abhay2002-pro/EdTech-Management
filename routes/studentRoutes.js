import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentControllers.js";

const router = express.Router();

router.route("/student").post(createStudent);
router.route("/student").get(getAllStudents);

export default router;