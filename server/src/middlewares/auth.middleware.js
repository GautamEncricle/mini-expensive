import jwt from "jsonwebtoken";
import User from "../models/User.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

const JWT_SECRET = process.env.JWT_SECRET || "jsonsecretkey";

export const isAuthenticated = catchAsync(async (req, res, next) => {
  let token;

  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  } else {
    throw new AppError("UNAUTHORIZE", 401);
  }

  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await User.findById(decoded.id).select("-password");
  if (!user) throw new AppError("User not found", 404);

  req.user = user;
  next();
});
