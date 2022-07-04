const Sequelize = require('sequelize');
const db = require('../config/db');

const Medical_record = db.define('medical_record', {
    address: {
        type: Sequelize.STRING
    },
    cnp: {
        type: Sequelize.STRING
    },
    blood_type: {
        type: Sequelize.STRING
    },
    rh: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    weight: {
        type: Sequelize.STRING
    },
    height: {
        type: Sequelize.STRING
    },
    allergy: {
        type: Sequelize.STRING
    },
    heart_disease: {
        type: Sequelize.STRING
    }
});

module.exports = Medical_record;