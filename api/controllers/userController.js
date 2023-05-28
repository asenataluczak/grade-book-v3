import asyncHandler from "express-async-handler";
import { db } from "../models/index.js";
import generateToken from "../config/generate-token.js";
import { comparePassword, encrypt } from "../config/password-bcrypt.cjs";

const User = db.users;

const authUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (user && (await comparePassword(req.body.password, user.password))) {
    generateToken(res, user.id);
    return res
      .status(201)
      .json({ fullname: user.fullname, email: user.email, role: user.role });
  }

  res.status(401);
  throw new Error("Invalid credentials");
});

const registerUser = asyncHandler(async (req, res) => {
  let data = {
    fullname: req.body.fullname,
    email: req.body.email,
    role: req.body.role || ROLES.admin,
    password: req.body.password,
  };

  const alreadyExistingUser = await User.findOne({
    where: { email: req.body.email },
  });
  if (alreadyExistingUser) {
    res.status(409);
    throw new Error(`User ${req.body.email} already exists`);
  }

  const user = await User.create({
    fullname: data.fullname,
    email: data.email,
    password: data.password,
    role: data.role,
  });

  if (user) {
    generateToken(res, user.id);
    return res
      .status(201)
      .json({ message: `User ${req.body.email} created successfully` });
  }

  res.status(409);
  throw new Error();
});

const logoutUser = (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
};

const getUserProfile = (req, res) => {
  const data = req.user.dataValues;
  const user = {
    id: data.id,
    fullname: data.fullname,
    email: data.email,
    role: data.role,
  };
  res.status(200).json(user);
};

export { authUser, registerUser, logoutUser, getUserProfile };
