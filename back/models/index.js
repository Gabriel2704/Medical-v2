const db = require('../config/db');

const User = require('./user');
const Doctor = require('./doctor');
const Patient = require('./patient');
const Appointment = require('./appointment');
const Medical_record = require('./medical_record');

User.hasMany(Doctor, { onDelete: 'cascade', foreignKey: 'userId' });
Doctor.belongsTo(User, { onDelete: 'cascade', foreignKey: 'userId' });

User.hasMany(Patient, { onDelete: 'cascade', foreignKey: 'userId' });
Patient.belongsTo(User, { onDelete: 'cascade', foreignKey: 'userId' });

// Doctor.hasMany(Appointment, { onDelete: 'cascade', foreignKey: 'doctorId' });
// Appointment.belongsTo(Doctor, { onDelete: 'cascade', foreignKey: 'doctorId' });

// Patient.hasMany(Appointment, { onDelete: 'cascade', foreignKey: 'pantientId' });
// Appointment.belongsTo(Patient, { onDelete: 'cascade', foreignKey: 'pantientId' });

Doctor.belongsToMany(Patient, { onDelete: 'cascade', through: { model: Appointment, unique: false, foreignKey: { name: "patientId", unique: false } } });
Patient.belongsToMany(Doctor, { onDelete: 'cascade', through: { model: Appointment, unique: false, foreignKey: { name: "doctorId", unique: false } } });

Patient.hasOne(Medical_record, { onDelete: 'cascade' });
Medical_record.belongsTo(Patient, { onDelete: 'cascade' });

module.exports = {
    User,
    Doctor,
    Patient,
    Appointment,
    Medical_record,
    connection: db
}
