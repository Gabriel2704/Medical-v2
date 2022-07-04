const express = require('express');
const router = express.Router();
const medical_record = require('../controllers/medical_record');

router.get('/getMedRec/:patientId', medical_record.getMedRec);
router.get('/getMedRecs/', medical_record.getMedRecs);
router.put('/updateMedRec/:id', medical_record.updateMedRec);

module.exports = router;