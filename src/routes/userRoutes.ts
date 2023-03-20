import { Router } from "express";
import {getAllUsers, getSingleUser, signin, signup} from '../controllers/userControllers';

const router = Router();

router.route('/user').get(getAllUsers);
router.route('/user/:id').get(getSingleUser);
router.route('/user/signup').post(signup);
router.route("/user/signin").post(signin);

export default router;