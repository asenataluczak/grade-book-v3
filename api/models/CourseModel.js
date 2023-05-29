const Course = (sequelize, DataTypes) => {
    const Course = sequelize.define("courses", {
        name: { type: DataTypes.STRING, require: true },
    }, { timestamps: false, })
    return Course
}

export default Course;