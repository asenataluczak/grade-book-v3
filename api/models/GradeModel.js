const Grade = (sequelize, DataTypes) =>
  sequelize.define("grades", {
    description: { type: DataTypes.STRING, require: true },
    value: { type: DataTypes.INTEGER, require: true },
    authorId: { type: DataTypes.INTEGER, foreignKey: true },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  });
export default Grade;
