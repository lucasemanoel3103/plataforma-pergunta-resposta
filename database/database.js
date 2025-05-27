const sequelize = require('sequelize');

const connection = new sequelize('perguntasrespostas', 'root', '3103Lucas@', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;