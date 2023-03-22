import Role from "@models/v1/Role";
import ErrorHandler from "@utils/errorHandler";
import { NextFunction, Request, Response } from "express";

class RoleService {
  static async createRole(req: Request, res: Response, next: NextFunction) {
    const { name, scopes } = req.body;

    const exists = await Role.findOne({ where: { name: name } });
    if (exists) return next(new ErrorHandler("Role exists already", 404));

    const role = await Role.create({ name, scopes });
    res.status(200).json({
      status: true,
      content: {
        data: role,
      },
    });
  }

  static async getRoles(req: Request, res: Response, next: NextFunction) {
      const roles = await Role.findAll({});
      res.status(200).json({
        status: true,
        content: {
          data: roles,
        },
      });
    }
}

export default RoleService;
