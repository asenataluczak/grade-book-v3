import {encrypt} from "../config/password-bcrypt.cjs";

const User = (sequelize, DataTypes) =>
  sequelize.define(
    "users",
    {
      fullname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: (user) => encrypt(user),
        beforeUpdate: (user) => encrypt(user),
      },
    }
  );
export default User;
