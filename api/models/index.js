import { Sequelize, DataTypes } from "sequelize";
import User from "./UserModel.js";
import Course from "./CourseModel.js";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mariadb",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

sequelize.authenticate().then(() => {
  console.log("sequelize connected");
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = User(sequelize, DataTypes);
db.courses = Course(sequelize, DataTypes)

export { db };

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});
