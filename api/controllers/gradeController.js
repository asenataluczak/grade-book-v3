import { db } from "../models/index.js";
import asyncHandler from "express-async-handler";

const Course = db.courses;
const User = db.users;
const Grade = db.grades;

const getGradesByCourse = asyncHandler(async (req, res) => {
  const students = await User.findAll({ where: { role: 2 } });
  const course = await Course.findByPk(req.params.courseId);
  let grades = [];
  students.forEach((student) =>
    grades.push({ studentId: student.id, studentName: student.fullname })
  );
  let rawGrades = await Grade.findAll({
    where: { courseId: +course.id },
    raw: true,
  });
  grades.forEach((val, i) => {
    const gradesPerCourse = rawGrades.filter(
      (grade) => grade.userId === val.studentId
    );
    grades[i] = { ...val, grades: gradesPerCourse };
  });
  if (grades) {
    return res.status(200).send(grades);
  }
  res.status(400);
  throw new Error();
});

export { getGradesByCourse };
