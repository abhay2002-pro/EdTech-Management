import express from "express";
import { signup, getAllUsers, getSingleUser, signin } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/user/signup").post(signup);
router.route("/user/signin").post(signin);
router.route("/user").get(getAllUsers);
router.route("/user/:id").get(getSingleUser);

export default router;