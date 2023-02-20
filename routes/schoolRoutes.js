import express from "express";
import { createSchool, getAllSchools } from "../controllers/schoolControllers.js";

const router = express.Router();

router.route("/school").post(createSchool);
router.route("/school").get(getAllSchools);

export default router;