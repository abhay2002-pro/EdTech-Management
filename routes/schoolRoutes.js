import express from "express";
import {
  createSchool,
  getAllSchools,
} from "../controllers/schoolControllers.js";
import { isAuthorised } from "../middlewares/authorization.js";

const router = express.Router();

router.route("/school").post(isAuthorised, createSchool);
router.route("/school").get(isAuthorised, getAllSchools);

export default router;
