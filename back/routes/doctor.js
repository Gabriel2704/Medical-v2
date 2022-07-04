const express = require('express');
const router = express.Router();
const doctor = require('../controllers/doctor');

router.get('/getDoctor/:doctorId', doctor.getDoctor);
router.get('/getDoctors/', doctor.getDoctors);

module.exports = router;