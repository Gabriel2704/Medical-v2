const Doctors = require('../models/doctor');

const controller = {
    getDoctor: async (req, res) => {
        try {
            let doctor = await Doctors.findOne({ where: { id: req.params.doctorId } })
            if (doctor) {
                res.status(200).send(doctor);
            } else {
                res.send({ msg: 'Nu exista doctorul' });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getDoctors: async (req, res) => {
        try {
            let doctors = await Doctors.findAll()
            if (doctors) {
                res.status(200).send(doctors);
            } else {
                res.send({ msg: 'Nu exista doctori' });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    },
}

module.exports = controller;