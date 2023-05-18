import express from "express";
import {
    authUser, getUserProfile,
    logoutUser,
    registerUser,
} from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
