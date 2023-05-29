import express from "express";
import { getAllCourses } from "../controllers/courseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getAllCourses);

export default router;
