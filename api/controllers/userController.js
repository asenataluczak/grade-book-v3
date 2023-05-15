import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register user" });
});

const logoutUser = (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
};




export { authUser, registerUser, logoutUser };
