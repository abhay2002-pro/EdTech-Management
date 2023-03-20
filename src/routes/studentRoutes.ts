import { Router } from "express";
import { createStudent, getAllStudents } from "../controllers/studentControllers";

const router = Router();

router.route("/student").post(createStudent);
router.route("/student").get(getAllStudents);

export default router;