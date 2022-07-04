// import { List } from 'antd';
import React from 'react';
import '../css/list.css';
import TabelMed from './TableMed';

export default function timeline({ pacient, detalii, programari }) {
    return (
        <div className="timeline">
            <h1>{pacient.name}</h1>

            <div class="details-row">
                <div class="details">Email: {pacient.email}</div>
                <div class="details">Adresa: {detalii.address}</div>
            </div>
            <div class="details-row">
                <div class="details">CNP: {detalii.cnp}</div>
                <div class="details">Grupa sange: {detalii.blood_type}</div>
            </div>
            <div class="details-row">
                <div class="details">Alergii: {detalii.allergy}</div>
                <div class="details">Afectiuni cardiace: {detalii.heart_disease}</div>
            </div>

            {/* <div className="container-list-medical">
                <List
                    header='Consultatii'
                    bordered
                    className='list'
                    dataSource={programari.map(programare => (
                        'Simptome: ' + programare.symptoms + ' - ' + 'Tratament: ' + programare.treatment + ' - ' + 'Alte informatii: ' + programare.other_information + ' - ' + 'Recomandari: ' + programare.recommendations
                    ))}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </div> */}
            <TabelMed programari={programari} id={pacient.id}/>
        </div>
    )
}
