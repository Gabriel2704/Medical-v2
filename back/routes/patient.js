const express = require('express');
const router = express.Router();
const patient = require('../controllers/patient');

router.get('/getPatient/:patientId', patient.getPatient);

module.exports = router;