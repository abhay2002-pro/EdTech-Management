// import { Request, Response, NextFunction } from "express";
// import { catchAsyncError } from "./catchAsyncError";
// import ErrorHandler from "../utils/errorHandler";
// import jwt from "jsonwebtoken";

// interface DecodedToken {
//   roleid: string;
// }

// export const isAuthorised = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers["authorization"];
//   if (authHeader == null) return next(new ErrorHandler("Bearer Token Missing", 401));

//   const token = authHeader.split(" ")[1];
//   if (token == null) return next(new ErrorHandler("Not Logged In", 401));

//   jwt.verify(token, 'aabhvagvagfabhjakmabuavayvaavyavagagfafgavavgagv', (err, role: DecodedToken) => {
//     if (err) return res.sendStatus(403);
//     req.roleId = role.roleid;
//     next();
//   });
// });