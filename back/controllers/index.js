const resetController = require('./reset');
const user = require('./user');
const appointment = require('./appointment');
const patient = require('./patient');
const doctor = require('./doctor');
const medical_record = require('./medical_record');

const controller = {
    resetController,
    user,
    appointment,
    patient,
    doctor,
    medical_record
};

module.exports = controller;