import asyncHandler from "express-async-handler";
import { db } from "../models/index.js";

const User = db.users;

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
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

  try {
    const user = await User.create(data);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.parent?.text);
  }

  if (user) {
    return res
      .status(201)
      .json({ message: `User ${req.body.email} created successfully` });
  }

  res.status(409);
  throw new Error();
});

const logoutUser = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};

export { authUser, registerUser, logoutUser };
