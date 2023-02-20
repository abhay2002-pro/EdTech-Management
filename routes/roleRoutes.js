import express from "express";
import { getRoles, createRole } from "../controllers/roleControllers.js";
import { isAuthorised } from "../middlewares/authorization.js";

const router = express.Router();

router.route("/role").post(createRole);
router.route("/role").get(isAuthorised, getRoles);

export default router;