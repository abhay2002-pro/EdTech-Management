import express from "express";
import { signup } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/user/signup").post(signup);

export default router;