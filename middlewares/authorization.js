import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const isAuthorised = catchAsyncError(async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  if (token == null) return next(new ErrorHandler("Not Logged In", 401));
  jwt.verify(token, process.env.JWT_SECRET, (err, role) => {
    if (err) return res.sendStatus(403);
    req.roleId = role.roleid;
    next();
  });
});
