import RoleController from '@controllers/v1/role';
import express from 'express';

const roleRouter = express.Router();

roleRouter.post("/", RoleController.createRole)
roleRouter.get("/", RoleController.getRoles);

export default roleRouter;