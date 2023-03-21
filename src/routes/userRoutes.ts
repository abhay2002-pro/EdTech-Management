import { Router } from "express";
import {getAllUsers, getSingleUser, signin, signup} from '../controllers/userControllers';
import { isAuthorised } from "../middlewares/authorization";

const router = Router();

router.route('/user').get(isAuthorised("user-get"), getAllUsers);
router.route('/user/:id').get(isAuthorised("user-get"), getSingleUser);
router.route('/user/signup').post(signup);
router.route("/user/signin").post(signin);

export default router;