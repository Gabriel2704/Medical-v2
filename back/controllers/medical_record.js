const MedRec = require('../models/medical_record');

const controller = {
    getMedRec: async (req, res) => {
        try {
            let medRec = await MedRec.findOne({ where: { patientId: req.params.patientId } })
            if (medRec) {
                res.status(200).send(medRec);
            } else {
                res.send({ msg: 'Nu exista pacientul' });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getMedRecs: async (req, res) => {
        try {
            let medrecs = await MedRec.findAll()
            if (medrecs) {
                res.status(200).send(medrecs);
            } else {
                res.send({ msg: 'Nu exista inregistrari' });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    },

    updateMedRec: async (req, res) => {
        const medRecToBeSent = {
            address: req.body.address,
            cnp: req.body.cnp,
            blood_type: req.body.blood_type,
            rh: req.body.rh,
            phone: req.body.phone,
            weight: req.body.weight,
            height: req.body.height,
            allergy: req.body.allergy,
            heart_disease: req.body.heart_disease,
        }

        try {
            await MedRec.update(medRecToBeSent, {
                where: { id: req.params.id },
            });
            res.status(200).send({ msg: 'Fisa medicala a fost schimbata' });
        }
        catch (err) {
            res.status(500).send({ msg: 'Fisa medicala nu exista' });
        }
    }
}

module.exports = controller;