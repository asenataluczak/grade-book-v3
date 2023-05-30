import { Sequelize, DataTypes } from "sequelize";
import User from "./UserModel.js";
import Course from "./CourseModel.js";
import dotenv from "dotenv";
import Grade from "./GradeModel.js";
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
db.courses = Course(sequelize, DataTypes);
db.grades = Grade(sequelize, DataTypes);

db.users.hasMany(db.grades);
db.courses.hasMany(db.grades);
db.grades.belongsTo(db.courses);
db.grades.belongsTo(db.users);

export { db };

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});
