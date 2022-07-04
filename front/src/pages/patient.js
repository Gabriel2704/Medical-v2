import React, { Component } from 'react';
import { getAppointmentsPatient, getDoctor, getPatient, getDoctors, get } from '../axios/controllers';
import { appointmentsRoute, doctorsRoute, patientsRoute, userRoute } from '../axios/routes';
import Navbar from '../components/Navbar1';
import AppointmentPatientTable from '../components/AppointmentPatientTable';
import List from '../components/List';
import '../css/patient.css';
import 'antd/dist/antd.css';

export default class doctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            appointments: [],
            data: [],
            patient: '',
            doctors: [],
            account: [],
            isDoc: ''
        };
    };

    async componentDidMount() {
        try {
            let aux = await getAppointmentsPatient(appointmentsRoute + '/getAppointmentsPatient', this.props.location.state.account.id);
            this.setState({
                appointments: aux,
            });
            this.setState({
                patient: aux[0].patientId,
            });
        }
        catch (err) {
        }
        try {
            let aux2 = await get(userRoute + '/', this.props.location.state.account.id);
            this.setState({
                isDoc: aux2.isDoctor,
            });
        } catch (err) {
        }
        for (let i = 0; i < this.state.appointments.length; i++) {
            let auxAppointmentId = this.state.appointments[i].appointmentId;
            let auxDate = this.state.appointments[i].date;
            let auxSymptoms = this.state.appointments[i].symptoms;
            let auxOtherInformation = this.state.appointments[i].other_information;
            let auxTreatment = this.state.appointments[i].treatment;
            let auxRecommendations = this.state.appointments[i].recommendations;
            let auxStatus = this.state.appointments[i].status;
            let auxDoctor = await getDoctor(doctorsRoute + '/getDoctor', this.state.appointments[i].doctorId);
            let auxPatient = await getPatient(patientsRoute + '/getPatient', this.state.appointments[i].patientId);
            let auxPatientId = this.state.appointments[i].patientId;
            let auxDoctorId = this.state.appointments[i].doctorId;

            this.setState({
                data: this.state.data.concat({
                    appointmentId: auxAppointmentId,
                    date: auxDate,
                    symptoms: auxSymptoms,
                    other_information: auxOtherInformation,
                    treatment: auxTreatment,
                    recommendations: auxRecommendations,
                    status: auxStatus,
                    doctor: auxDoctor.name,
                    patient: auxPatient.name,
                    patientId: auxPatientId,
                    doctorId: auxDoctorId
                })
            });
        }

        try {
            let aux = await getDoctors(doctorsRoute + '/getDoctors');
            this.setState({
                doctors: aux,
            });
        }
        catch (err) {
        }
    }

    redirect = async (patient) => {
        this.props.history.push({
            state: { account: patient, isDoctor: this.state.isDoc },
            pathname: "/medical_record"
        });
    }

    render() {
        return (
            <div className='containerP'>
                <Navbar />

                <div className="dashboard">
                    <AppointmentPatientTable programari={this.state.data} id={this.state.patient} fisaMed={this.redirect} />
                    <List doctori={this.state.doctors} />
                </div>

            </div>
        )
    }
}
