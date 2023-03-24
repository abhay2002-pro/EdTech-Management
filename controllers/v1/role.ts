import RoleService from "@services/v1/role";
import { NextFunction, Request, Response } from "express";

class RoleController {
    static async createRole(req: Request, res: Response, next: NextFunction) {
        const result = await RoleService.createRole(req, res, next);
        res.status(200).json(result);
    }

    static async getRoles(req: Request, res: Response, next: NextFunction) {
        const result = await RoleService.getRoles();
        res.status(200).json(result);
    }
}

export default RoleController;