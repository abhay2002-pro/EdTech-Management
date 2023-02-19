import express from "express";
import { getRoles } from "../controllers/routeControllers.js";

const router = express.Router();

router.route("/role").post(getRoles);
router.route("/role").get(getRoles);

export default router;