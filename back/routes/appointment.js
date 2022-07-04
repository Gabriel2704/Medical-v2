const express = require('express');
const router = express.Router();
const appointment = require('../controllers/appointment');

router.get('/getAppointments/:userId', appointment.getAppointments);
router.get('/getAppointmentsDoctor/:id', appointment.getAppointmentsDoctor);
router.get('/getAppointmentsAll', appointment.getAppointmentsAll);
router.get('/getAppointmentsPatient/:userId', appointment.getAppointmentsPatient);
router.get('/getAppointmentsPatientId/:patientId', appointment.getAppointmentsPatientId);
router.post('/addAppointment', appointment.addAppointment);
router.post('/addAppointmentDoctor', appointment.addAppointmentDoctor);
router.put('/updateAppointment/:appointmentId', appointment.updateAppointment);
router.put('/updateAppointmentPatient/:appointmentId', appointment.updateAppointmentPatient);
router.delete('/deleteAppointment/:appointmentId', appointment.deleteAppointment);

module.exports = router;