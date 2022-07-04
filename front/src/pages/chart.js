import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ChartDoctors from '../components/ChartDoctors';
import { getDoctor, getAppointmentsAll, getAppointmentsDoctor } from '../axios/controllers';
import { appointmentsRoute, doctorsRoute } from '../axios/routes';
import "../css/chart.css";


export default class chart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            appointments: [],
            doctors: [],
            ax: [],
            label: [],
            numbersAppointments: []
        };
    };

    async componentDidMount() {
        try {
            let aux = await getAppointmentsAll(appointmentsRoute + '/getAppointmentsAll');

            this.setState({
                appointments: aux,
            });

            for (let i = 0; i < this.state.appointments.length; i++) {
                this.state.doctors[i] = await getDoctor(doctorsRoute + '/getDoctor', this.state.appointments[i].doctorId);
            }

            let docs = this.state.doctors.map(d => d.id)
            let docsId = docs.filter((d, idx) => docs.indexOf(d) === idx);

            for (let i = 0; i < docsId.length; i++) {
                let apmt = await getAppointmentsDoctor(appointmentsRoute + '/getAppointmentsDoctor', docsId[i]);
                let dct = await getDoctor(doctorsRoute + '/getDoctor', docsId[i]);
                this.state.ax[i] = [dct.name, apmt.length];
            }
            this.setState({
                details: this.state.ax
            })

            for (let i = 0; i < this.state.details.length; i++) {
                this.setState({
                    label: [...this.state.label, this.state.details[i][0]]
                })
            }

            for (let i = 0; i < this.state.details.length; i++) {
                this.setState({
                    numbersAppointments: [...this.state.numbersAppointments, this.state.details[i][1]]
                })
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <img id='bg-chart' alt="logo" src={"../imgs/bg-chart.jpg"}></img>
                <div className='charts'>
                    <ChartDoctors id='chart' detalii={this.state.ax} />
                </div>
            </div>
        )
    }
}
