import React from 'react';
import '../css/records.css';
import MaterialTable from 'material-table'
import { medRecsRoute } from '../axios/routes';
import { updateMedRec } from '../axios/controllers';


const TabelFise = ({ infoMed, fisaMed }) => {
  const columns = [
    { title: "Nume", field: "patient", editable: false },
    { title: "Adresa", field: "address" },
    { title: "CNP", field: "cnp" },
    { title: "Grupa sange", field: "blood_type" },
    { title: "Rh", field: "rh" },
    { title: "Telefon", field: "phone" },
    { title: "Greutate", field: "weight" },
    { title: "Inaltime", field: "height" },
    { title: "Alergii", field: "allergy" },
    { title: "Afectiuni cardiace", field: "heart_disease" },
  ];

  return (
    <div className="appointmentTableRecords">
      <MaterialTable
        title="Fise medicale"
        data={infoMed}

        columns={columns}

        editable={{
          onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
            try {
              updateMedRec(medRecsRoute, {
                address: updatedRow.address,
                cnp: updatedRow.cnp,
                blood_type: updatedRow.blood_type,
                rh: updatedRow.rh,
                phone: updatedRow.phone,
                weight: updatedRow.weight,
                height: updatedRow.height,
                allergy: updatedRow.allergy,
                heart_disease: updatedRow.heart_disease
              }, oldRow.patientId);
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

        actions={[
          {
            icon: 'save',
            tooltip: 'Fisa medicala',
            onClick: (event, rowData) => { fisaMed(rowData); }
          }
        ]}
      />
    </div>
  );

}

export default TabelFise