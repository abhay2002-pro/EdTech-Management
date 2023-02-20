import express from "express";
import { getRoles, createRole } from "../controllers/roleControllers.js";

const router = express.Router();

router.route("/role").post(createRole);
router.route("/role").get(getRoles);

export default router;