import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getGradesByCourse } from "../controllers/gradeController.js";

const router = express.Router();

router.route("/:courseId").get(protect, getGradesByCourse);

export default router;
