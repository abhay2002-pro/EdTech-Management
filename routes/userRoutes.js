import express from "express";
import { signup, getAllUsers } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/user/signup").post(signup);
router.route("/user").get(getAllUsers);

export default router;