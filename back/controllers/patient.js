const Patients = require('../models/patient');

const controller = {
    getPatient: async (req, res) => {
        try {
            let patient = await Patients.findOne({ where: { id: req.params.patientId } })
            if (patient) {
                res.status(200).send(patient);
            } else {
                res.send({ msg: 'Nu exista pacientul' });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    },
}

module.exports = controller;