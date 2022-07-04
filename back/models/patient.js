const Sequelize = require('sequelize');
const db = require('../config/db');

const Patient = db.define('patient', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = Patient;