const express = require('express');
const router = express.Router();
const otherRouter = require('./db.js');
const user = require('./user');
const appointment = require('./appointment');
const patient = require('./patient');
const doctor = require('./doctor');
const medical_record = require('./medical_record');

router.use("/", otherRouter);
router.use("/user", user);
router.use("/appointment", appointment);
router.use("/patient", patient);
router.use("/doctor", doctor);
router.use("/medical_record", medical_record);

module.exports = router;