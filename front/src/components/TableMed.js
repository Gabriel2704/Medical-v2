import React from 'react';
import '../css/tableMed.css';
import MaterialTable from 'material-table'
import { appointmentsRoute } from '../axios/routes';
import { deleteAppointment, updateAppointment } from '../axios/controllers';
import Select from "react-select";

function TabelMed({ programari, fisaMed, id }) {
    const dates = [
        { value: "Vineri 01.07 14:00", label: "Vineri 01.07 14:00" },
        { value: "Vineri 01.07 16:00", label: "Vineri 01.07 16:00" },
        { value: "Vineri 01.07 18:00", label: "Vineri 01.07 18:00" },

        { value: "Luni 04.07 08:00", label: "Luni 04.07 08:00" },
        { value: "Luni 04.07 10:00", label: "Luni 04.07 10:00" },
        { value: "Luni 04.07 12:00", label: "Luni 04.07 12:00" },
        { value: "Luni 04.07 14:00", label: "Luni 04.07 14:00" },
        { value: "Luni 04.07 16:00", label: "Luni 04.07 16:00" },
        { value: "Luni 04.07 18:00", label: "Luni 04.07 18:00" },
        { value: "Marti 05.07 08:00", label: "Marti 05.07 08:00" },
        { value: "Marti 05.07 10:00", label: "Marti 05.07 10:00" },
        { value: "Marti 05.07 12:00", label: "Marti 05.07 12:00" },
        { value: "Marti 05.07 14:00", label: "Marti 05.07 14:00" },
        { value: "Marti 05.07 16:00", label: "Marti 05.07 16:00" },
        { value: "Marti 05.07 18:00", label: "Marti 05.07 18:00" },
        { value: "Miercuri 06.07 08:00", label: "Miercuri 06.07 08:00" },
        { value: "Miercuri 06.07 10:00", label: "Miercuri 06.07 10:00" },
        { value: "Miercuri 06.07 12:00", label: "Miercuri 06.07 12:00" },
        { value: "Miercuri 06.07 14:00", label: "Miercuri 06.07 14:00" },
        { value: "Miercuri 06.07 16:00", label: "Miercuri 06.07 16:00" },
        { value: "Miercuri 06.07 18:00", label: "Miercuri 06.07 18:00" },
        { value: "Joi 07.07 08:00", label: "Joi 07.07 08:00" },
        { value: "Joi 07.07 10:00", label: "Joi 07.07 10:00" },
        { value: "Joi 07.07 12:00", label: "Joi 07.07 12:00" },
        { value: "Vineri 08.07 14:00", label: "Vineri 08.07 14:00" },
        { value: "Vineri 08.07 16:00", label: "Vineri 08.07 16:00" },
        { value: "Vineri 08.07 18:00", label: "Vineri 08.07 18:00" },

        { value: "Luni 11.07 08:00", label: "Luni 11.07 08:00" },
        { value: "Luni 11.07 10:00", label: "Luni 11.07 10:00" },
        { value: "Luni 11.07 12:00", label: "Luni 11.07 12:00" },
        { value: "Luni 11.07 14:00", label: "Luni 11.07 14:00" },
        { value: "Luni 11.07 16:00", label: "Luni 11.07 16:00" },
        { value: "Luni 11.07 18:00", label: "Luni 11.07 18:00" },
        { value: "Marti 12.07 08:00", label: "Marti 12.07 08:00" },
        { value: "Marti 12.07 10:00", label: "Marti 12.07 10:00" },
        { value: "Marti 12.07 12:00", label: "Marti 12.07 12:00" },
        { value: "Marti 12.07 14:00", label: "Marti 12.07 14:00" },
        { value: "Marti 12.07 16:00", label: "Marti 12.07 16:00" },
        { value: "Marti 12.07 18:00", label: "Marti 12.07 18:00" },
        { value: "Miercuri 13.07 08:00", label: "Miercuri 13.07 08:00" },
        { value: "Miercuri 13.07 10:00", label: "Miercuri 13.07 10:00" },
        { value: "Miercuri 13.07 12:00", label: "Miercuri 13.07 12:00" },
        { value: "Miercuri 13.07 14:00", label: "Miercuri 13.07 14:00" },
        { value: "Miercuri 13.07 16:00", label: "Miercuri 13.07 16:00" },
        { value: "Miercuri 13.07 18:00", label: "Miercuri 13.07 18:00" },
        { value: "Joi 14.07 08:00", label: "Joi 14.07 08:00" },
        { value: "Joi 14.07 10:00", label: "Joi 14.07 10:00" },
        { value: "Joi 14.07 12:00", label: "Joi 14.07 12:00" },
        { value: "Vineri 15.07 14:00", label: "Vineri 15.07 14:00" },
        { value: "Vineri 15.07 16:00", label: "Vineri 15.07 16:00" },
        { value: "Vineri 15.07 18:00", label: "Vineri 15.07 18:00" },

        { value: "Luni 18.07 08:00", label: "Luni 18.07 08:00" },
        { value: "Luni 18.07 10:00", label: "Luni 18.07 10:00" },
        { value: "Luni 18.07 12:00", label: "Luni 18.07 12:00" },
        { value: "Luni 18.07 14:00", label: "Luni 18.07 14:00" },
        { value: "Luni 18.07 16:00", label: "Luni 18.07 16:00" },
        { value: "Luni 18.07 18:00", label: "Luni 18.07 18:00" },
        { value: "Marti 19.07 08:00", label: "Marti 19.07 08:00" },
        { value: "Marti 19.07 10:00", label: "Marti 19.07 10:00" },
        { value: "Marti 19.07 12:00", label: "Marti 19.07 12:00" },
        { value: "Marti 19.07 14:00", label: "Marti 19.07 14:00" },
        { value: "Marti 19.07 16:00", label: "Marti 19.07 16:00" },
        { value: "Marti 19.07 18:00", label: "Marti 19.07 18:00" },
        { value: "Miercuri 20.07 08:00", label: "Miercuri 20.07 08:00" },
        { value: "Miercuri 20.07 10:00", label: "Miercuri 20.07 10:00" },
        { value: "Miercuri 20.07 12:00", label: "Miercuri 20.07 12:00" },
        { value: "Miercuri 20.07 14:00", label: "Miercuri 20.07 14:00" },
        { value: "Miercuri 20.07 16:00", label: "Miercuri 20.07 16:00" },
        { value: "Miercuri 20.07 18:00", label: "Miercuri 20.07 18:00" },
        { value: "Joi 21.07 08:00", label: "Joi 21.07 08:00" },
        { value: "Joi 21.07 10:00", label: "Joi 21.07 10:00" },
        { value: "Joi 21.07 12:00", label: "Joi 21.07 12:00" },
        { value: "Vineri 22.07 14:00", label: "Vineri 22.07 14:00" },
        { value: "Vineri 22.07 16:00", label: "Vineri 22.07 16:00" },
        { value: "Vineri 22.07 18:00", label: "Vineri 22.07 18:00" },

        { value: "Luni 25.07 08:00", label: "Luni 25.07 08:00" },
        { value: "Luni 25.07 10:00", label: "Luni 25.07 10:00" },
        { value: "Luni 25.07 12:00", label: "Luni 25.07 12:00" },
        { value: "Luni 25.07 14:00", label: "Luni 25.07 14:00" },
        { value: "Luni 25.07 16:00", label: "Luni 25.07 16:00" },
        { value: "Luni 25.07 18:00", label: "Luni 25.07 18:00" },
        { value: "Marti 26.07 08:00", label: "Marti 26.07 08:00" },
        { value: "Marti 26.07 10:00", label: "Marti 26.07 10:00" },
        { value: "Marti 26.07 12:00", label: "Marti 26.07 12:00" },
        { value: "Marti 26.07 14:00", label: "Marti 26.07 14:00" },
        { value: "Marti 26.07 16:00", label: "Marti 26.07 16:00" },
        { value: "Marti 26.07 18:00", label: "Marti 26.07 18:00" },
        { value: "Miercuri 27.07 08:00", label: "Miercuri 27.07 08:00" },
        { value: "Miercuri 27.07 10:00", label: "Miercuri 27.07 10:00" },
        { value: "Miercuri 27.07 12:00", label: "Miercuri 27.07 12:00" },
        { value: "Miercuri 27.07 14:00", label: "Miercuri 27.07 14:00" },
        { value: "Miercuri 27.07 16:00", label: "Miercuri 27.07 16:00" },
        { value: "Miercuri 27.07 18:00", label: "Miercuri 27.07 18:00" },
        { value: "Joi 28.07 08:00", label: "Joi 28.07 08:00" },
        { value: "Joi 28.07 10:00", label: "Joi 28.07 10:00" },
        { value: "Joi 28.07 12:00", label: "Joi 28.07 12:00" },
        { value: "Vineri 29.07 14:00", label: "Vineri 29.07 14:00" },
        { value: "Vineri 29.07 16:00", label: "Vineri 29.07 16:00" },
        { value: "Vineri 29.07 18:00", label: "Vineri 29.07 18:00" },
    ];



    const columns = [
        // { title: "Doctor", field: "doctor" },
        // { title: "Pacient", field: "patient" },
        {
            title: "Data programare",
            field: "date",
            editComponent: ({ value, onChange }) => (
                < Select
                    options={dates}
                    name="dateSelect"
                    onChange={(selectedOption) => onChange(selectedOption.value)}
                    value={value ? value.value : value}
                />
            )
        },
        { title: "Simptome", field: "symptoms" },
        { title: "Alte informatii", field: "other_information" },
        { title: "Tratament", field: "treatment" },
        { title: "Recomandari", field: "recommendations" },
        // { title: "Status", field: "status" },
    ];

    return (
        <div className="appointmentTableMed">
            <MaterialTable
                title="Programari"
                data={programari}

                columns={columns}

                editable={{
                    //   onRowAdd: (newRow) => new Promise((resolve, reject) => {
                    //     try {
                    //       console.log('newRow: ', newRow);
                    //       postAppointmentDoctor(appointmentsRoute, { newRow, id });
                    //     } catch (error) {
                    //       console.log(error);
                    //     }

                    //     setTimeout(() => {
                    //       window.location.reload(false);
                    //     }, 2000)
                    //   }),

                    onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                        try {
                            deleteAppointment(appointmentsRoute, selectedRow.appointmentId);
                        } catch (err) {
                            console.log(err);
                        }

                        setTimeout(() => {
                            window.location.reload(false);
                        }, 2000)
                    }),

                    onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                        try {
                            updateAppointment(appointmentsRoute, { date: updatedRow.date, treatment: updatedRow.treatment, recommendations: updatedRow.recommendations, symptoms: updatedRow.symptoms, other_information: updatedRow.other_information, doctorId: updatedRow.doctorId }, oldRow.appointmentId);
                        }
                        catch (err) {
                            console.log(err);
                        }

                        setTimeout(() => {
                            window.location.reload(false);
                        }, 2000)
                    })
                }}

                options={{
                    actionsColumnIndex: -1,
                    addRowPosition: "first",
                    exportButton: true
                }}

                localization={{
                    toolbar: {
                        exportCSVName: "Export as Excel",
                        exportPDFName: "Export as PDF"
                    },

                    header: {
                        actions: 'Modificari'
                    }
                }}

            // actions={[
            //     {
            //         icon: 'save',
            //         tooltip: 'Fisa medicala',
            //         onClick: (event, rowData) => { fisaMed(rowData); }
            //     }
            // ]}
            />
        </div>
    );

}

export default TabelMed