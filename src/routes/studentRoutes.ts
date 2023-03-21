import { Router } from "express";
import { createStudent, getAllStudents } from "../controllers/studentControllers";
import { isAuthorised } from "../middlewares/authorization";

const router = Router();

router.route("/student").post(isAuthorised(("student-create")) ,createStudent);
router.route("/student").get(isAuthorised(("student-get")), getAllStudents);

export default router;