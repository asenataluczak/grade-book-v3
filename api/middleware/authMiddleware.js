import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { db } from "../models/index.js";

const User = db.users;

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findByPk(decoded.userId);
      next();
    } catch {
      res.status(401);
      throw new Error("Token invalid");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized");
  }
});

export { protect };
