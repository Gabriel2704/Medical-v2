import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Navbar1 from '../components/Navbar1';
import Timeline from '../components/Timeline';
import { getAppointmentsPatientId, getMedRec, getPatient } from '../axios/controllers';
import { appointmentsRoute, medRecsRoute, patientsRoute } from '../axios/routes';
import '../css/medical_record.css';

export default class medrec extends Component {

    constructor(props) {
        super(props);

        this.state = {
            account: [],
            patient: [],
            details: [],
            appointments: [],
            isDoc: 0
        };
    };
    async componentDidMount() {
        try {
            let aux = await getPatient(patientsRoute + '/getPatient', this.props.location.state.account.patientId);

            this.setState({
                patient: aux,
            });
        }
        catch (err) {
        }

        try {
            let aux = await getMedRec(medRecsRoute + '/getMedRec', this.props.location.state.account.patientId);
            this.setState({
                details: aux
            });
        }
        catch (err) {
        }

        try {
            let aux = await getAppointmentsPatientId(appointmentsRoute + '/getAppointmentsPatientId', this.props.location.state.account.patientId);
            this.setState({
                appointments: aux
            });
        }
        catch (err) {
        }
        this.setState({
            isDoc: this.props.location.state.isDoctor
        });
        console.log('this.state.appointments: ', this.state.appointments);
        console.log('this.state.details: ', this.state.details);
        console.log('this.state.patient: ', this.state.patient);
    }

    render() {
        const isDoc = this.state.isDoc;
        return (
            <div className="containerMR" >
                {
                    isDoc ? (
                        <Navbar />
                    ) : (
                        <Navbar1 />
                    )
                }
                <Timeline pacient={this.state.patient} detalii={this.state.details} programari={this.state.appointments} />
            </div >
        )
    }
}
