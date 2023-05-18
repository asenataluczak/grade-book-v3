module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
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
      type: DataTypes.INT,
      allowNull: false,
    }
  });
  return User;
};
