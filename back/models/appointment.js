const Sequelize = require('sequelize');
const db = require('../config/db');

const Appointment = db.define('appointment', {
    appointmentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: Sequelize.STRING
    },
    symptoms: {
        type: Sequelize.STRING
    },
    other_information: {
        type: Sequelize.STRING
    },
    treatment: {
        type: Sequelize.STRING
    },
    recommendations: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Appointment;