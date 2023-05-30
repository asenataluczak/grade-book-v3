import express, { urlencoded } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import gradeRoutes from "./routes/gradeRoutes.js";

dotenv.config();
const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(cookieParser())

app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/grades", gradeRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
