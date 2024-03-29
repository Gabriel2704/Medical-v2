const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    isDoctor: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = User;