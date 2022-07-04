import React, { Component } from 'react';
import { getMedRecs, getPatient } from '../axios/controllers';
import { medRecsRoute, patientsRoute } from '../axios/routes';
import Navbar from '../components/Navbar';
import AppointmentRecordsTable from '../components/AppointmentRecordsTable';
import '../css/records.css';

export default class medrec extends Component {

    constructor(props) {
        super(props);

        this.state = {
            medRecs: [],
            data: [],
            account: []
        };
    };
    async componentDidMount() {
        try {
            let aux = await getMedRecs(medRecsRoute + '/getMedRecs');
            this.setState({
                medRecs: aux,
            });
            for (let i = 0; i < this.state.medRecs.length; i++) {
                let auxAddress = this.state.medRecs[i].address;
                let auxCNP = this.state.medRecs[i].cnp;
                let auxBlood = this.state.medRecs[i].blood_type;
                let auxRh = this.state.medRecs[i].rh;
                let auxPhone = this.state.medRecs[i].phone;
                let auxWeight = this.state.medRecs[i].weight;
                let auxHeight = this.state.medRecs[i].height;
                let auxAllergy = this.state.medRecs[i].allergy;
                let auxHeart = this.state.medRecs[i].heart_disease;
                let auxPatient = await getPatient(patientsRoute + '/getPatient', this.state.medRecs[i].patientId);

                this.setState({
                    data: this.state.data.concat({
                        address: auxAddress,
                        patient: auxPatient.name,
                        cnp: auxCNP,
                        blood_type: auxBlood,
                        rh: auxRh,
                        phone: auxPhone,
                        weight: auxWeight,
                        height: auxHeight,
                        allergy: auxAllergy,
                        heart_disease: auxHeart,
                        patientId: this.state.medRecs[i].patientId
                    })
                });
            }
        }
        catch (err) {
        }
    }

    redirect = async (patient) => {
        this.props.history.push({
            state: { account: patient },
            pathname: "/medical_record"
        });
    }

    render() {
        return (
            <div className="containerRec">
                <Navbar />
                <AppointmentRecordsTable infoMed={this.state.data} fisaMed={this.redirect} />
            </div>
        )
    }
}
