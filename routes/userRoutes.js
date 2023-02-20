import express from "express";
import { signup, getAllUsers, getSingleUser, signin } from "../controllers/userControllers.js";
import { isAuthorised } from "../middlewares/authorization.js";
import { getSingleUserValidation, signinValidation, signupValidation } from "../validators/userValidators.js";

const router = express.Router();

router.route("/user/signup").post(signupValidation ,signup);
router.route("/user/signin").post(signinValidation, signin);
router.route("/user").get(isAuthorised, getAllUsers);
router.route("/user/:id").get(getSingleUserValidation, isAuthorised, getSingleUser);

export default router;