const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mariadb',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

sequelize.authenticate().then(() => {
    console.log('sequelize connected')
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./UserModel.js')(sequelize, DataTypes)

module.exports = db

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })