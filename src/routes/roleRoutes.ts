import express from "express";
import { getRoles, createRole } from "../controllers/roleControllers";
import { isAuthorised } from "../middlewares/authorization";

const router = express.Router();

router.route("/role").post(createRole);
router.route("/role").get(isAuthorised("role-get"), getRoles);

export default router;