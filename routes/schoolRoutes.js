import express from "express";
import { createSchool } from "../controllers/schoolControllers.js";

const router = express.Router();

router.route("/school").post(createSchool);

export default router;