import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "@utils/catchAsyncError";
import ErrorHandler from "../../utils/errorHandler";
import jwt from "jsonwebtoken";
import DecodedToken from "@interfaces/DecodedToken";
import Roles from "@models/v1/Role";

export const isAuthorised = (user_scope: string) =>
  catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    if (authHeader == null)
      return next(new ErrorHandler("Bearer Token Missing", 401));

    const token = authHeader.split(" ")[1];
    console.log(token);
    if (token == null) return next(new ErrorHandler("Not Logged In", 401));

    const decoded: string | jwt.JwtPayload = jwt.verify(
      token,
      "aabhvagvagfabhjakmabuavayvaavyavagagfafgavavgagv"
    );
    const { roleid } = decoded as DecodedToken;
    const role = await Roles.findOne({ where: { id: roleid } });
    if (!role && !role.scopes.includes(user_scope)) {
      return next(
        new ErrorHandler("You don't have access to this resource.", 401)
      );
    }
    next();
  });
