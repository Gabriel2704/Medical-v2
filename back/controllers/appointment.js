const Doctors = require('../models/doctor');
const Patients = require('../models/patient');
const Appointments = require('../models/appointment');


const controller = {
    addAppointment: async (req, res) => {
        const { doctor, date, symptoms, other_information } = req.body.newRow;
        const { id } = req.body;
        let i = 0;
        try {
            Appointments.findAll({ where: { doctorId: doctor } }).then(appointments => {
                appointments.forEach(el => {
                    if (el.date == date) {
                        i = 1;
                    }
                });
                if (i == 0) {
                    Appointments.create({ doctorId: doctor, date: date, symptoms: symptoms, other_information: other_information, treatment: '', recommendations: '', patientId: id });
                }
            });
        } catch (error) {
            res.send({ error });
        }
    },

    addAppointmentDoctor: async (req, res) => {
        const { patient, date, symptoms, other_information } = req.body.newRow;
        const { id } = req.body;
        let i = 0;
        try {
            Appointments.findAll({ where: { doctorId: id } }).then(appointments => {
                appointments.forEach(el => {
                    if (el.date == date) {
                        i = 1;
                        console.log('asdad')
                    }
                });
                if (i == 0) {
                    Patients.findOne({ where: { name: patient } }).then(ptn => {
                        Appointments.create({ doctorId: id, date: date, symptoms: symptoms, other_information: other_information, treatment: '', recommendations: '', patientId: ptn.id });
                    })
                }
            });
        } catch (error) {
            res.send({ error });
        }
    },

    getAppointments: async (req, res) => {
        try {
            let doctor = await Doctors.findOne({
                where: { userId: req.params.userId },
            })

            let appointments = await Appointments.findAll({
                where: { doctorId: doctor.id },
            })

            res.status(200).send(appointments);
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    getAppointmentsDoctor: async (req, res) => {
        try {
            let doctor = await Doctors.findOne({
                where: { id: req.params.id },
            })

            let appointments = await Appointments.findAll({
                where: { doctorId: doctor.id },
            })

            res.status(200).send(appointments);
        }
        catch (err) {
            res.status(500).send(err);
        }
    },


    getAppointmentsAll: async (req, res) => {
        try {
            let appointments = await Appointments.findAll();
            res.status(200).send(appointments);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getAppointmentsPatient: async (req, res) => {
        try {
            let patient = await Patients.findOne({
                where: { userId: req.params.userId },
            })

            let appointments = await Appointments.findAll({
                where: { patientId: patient.id },
            })

            res.status(200).send(appointments);
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    getAppointmentsPatientId: async (req, res) => {
        try {
            let appointments = await Appointments.findAll({
                where: { patientId: req.params.patientId },
            })

            res.status(200).send(appointments);
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    updateAppointment: async (req, res) => {
        const doctorToBeSent = {
            doctorId: req.body.doctorId
        }

        const appointmentToBeSent = {
            date: req.body.date,
            treatment: req.body.treatment,
            recommendations: req.body.recommendations,
            symptoms: req.body.symptoms,
            other_information: req.body.other_information,
        }

        let i = 0;
        try {
            Appointments.findAll({ where: { doctorId: doctorToBeSent.doctorId } }).then(appointments => {
                // appointments.forEach(el => {
                //     if (el.date == appointmentToBeSent.date) {
                //         i = 1;
                //     }
                // });

                // if (i == 0) {
                Appointments.update(appointmentToBeSent, {
                    where: { appointmentId: req.params.appointmentId },
                });
                res.status(200).send({ msg: 'Programarea a fost schimbata' });
                // }
            });

        }
        catch (err) {
            res.status(500).send({ msg: 'Programarea nu exista' });
        }
    },

    updateAppointmentPatient: async (req, res) => {
        const doctorToBeSent = {
            doctorId: req.body.doctorId
        }

        const appointmentToBeSent = {
            date: req.body.date,
            symptoms: req.body.symptoms,
            other_information: req.body.other_information
        }

        let i = 0;
        try {
            Appointments.findAll({ where: { doctorId: doctorToBeSent.doctorId } }).then(appointments => {
                // appointments.forEach(el => {
                //     if (el.date == appointmentToBeSent.date) {
                //         i = 1;
                //     }
                // });

                // if (i == 0) {
                    Appointments.update(appointmentToBeSent, {
                        where: { appointmentId: req.params.appointmentId },
                    });
                    res.status(200).send({ msg: 'Programarea a fost schimbata' });
                // }
            });

        }
        catch (err) {
            res.status(500).send({ msg: 'Programarea nu exista' });
        }
    },

    deleteAppointment: async (req, res) => {
        try {
            const appointment = await Appointments.findOne({ where: { appointmentId: req.params.appointmentId } });
            if (appointment) {
                await appointment.destroy();
                res.status(200).send({ msg: "Programarea a fost stearsa" });
            }
            else {
                res.status(404).send({ msg: "Programarea nu a fost gasita" });
            }
        }
        catch (err) {
            console.log(err);
        }
    },
}


module.exports = controller;