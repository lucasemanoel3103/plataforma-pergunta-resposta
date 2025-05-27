const sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas', {
    título: {
        type: sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({ force: false }).then(() => {});

module.exports = Pergunta;  