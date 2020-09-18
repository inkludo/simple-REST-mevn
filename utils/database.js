const Sequelize = require('sequelize')

const DB_NAME = 'your-name'
const USER_NAME = 'your-username'
const PASSWORD = 'your-password'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize