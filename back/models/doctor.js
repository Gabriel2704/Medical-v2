const Sequelize = require('sequelize');
const db = require('../config/db');

const Doctor = db.define('doctor', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = Doctor;