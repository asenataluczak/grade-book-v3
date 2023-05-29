import { db } from "../models/index.js";

const Course = db.courses;

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).send(courses);
  } catch (err) {
    res.status(400).send(err);
  }
};

export { getAllCourses };
