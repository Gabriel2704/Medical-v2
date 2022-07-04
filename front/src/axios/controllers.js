import axios from 'axios';

async function get(url, id) {
    try {
        let newUrl = !id ? url : url + "/" + id;
        return (await axios.get(newUrl, { withCredentials: true })).data;
    } catch (e) {
        return e;
    }
}

async function post(url, item) {
    try {
        return (await axios.post(
            url,
            item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )).data;
    } catch (e) {
        return e.response.data;
    }
}

async function getAppointments(url, id) {
    try {
        let newUrl = !id ? url : url + "/" + id;
        return (await axios.get(newUrl, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function getAppointmentsDoctor(url, id) {
    try {
        let newUrl = !id ? url : url + "/" + id;
        return (await axios.get(newUrl, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function getAppointmentsAll(url) {
    try {

        return (await axios.get(url, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function getAppointmentsPatient(url, id) {
    try {
        let newUrl = !id ? url : url + "/" + id;
        return (await axios.get(newUrl, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function getAppointmentsPatientId(url, id) {
    try {
        let newUrl = !id ? url : url + "/" + id;
        return (await axios.get(newUrl, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function postAppointment(url, item) {
    try {
        let newUrl = !item ? url : url + "/addAppointment";
        return (await axios.post(
            newUrl,
            item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )).data;
    } catch (e) {
        return e.response.data;
    }
}

async function postAppointmentDoctor(url, item) {
    try {
        let newUrl = !item ? url : url + "/addAppointmentDoctor";
        return (await axios.post(
            newUrl,
            item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )).data;
    } catch (e) {
        return e.response.data;
    }
}

async function getDoctor(url, id) {
    try {
        let newUrl = !id ? url : url + "/" + id;
        return (await axios.get(newUrl, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function getDoctors(url) {
    try {
        return (await axios.get(url, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function getPatient(url, id) {
    try {
        let newUrl = !id ? url : url + "/" + id;
        return (await axios.get(newUrl, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function updateAppointment(url, item, id) {
    try {
        let newUrl = !item ? url : url + "/updateAppointment/" + id;
        return (await axios.put(
            newUrl,
            item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )).data;
    } catch (e) {
        return e.response.data;
    }
}

async function updateAppointmentPatient(url, item, id) {
    try {
        let newUrl = !item ? url : url + "/updateAppointmentPatient/" + id;
        return (await axios.put(
            newUrl,
            item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )).data;
    } catch (e) {
        return e.response.data;
    }
}

async function deleteAppointment(url, id) {
    try {
        await axios.delete(url + "/deleteAppointment/" + id);
    } catch (e) {
        return e.response.data;
    }
}

async function getMedRec(url, id) {
    try {
        let newUrl = !id ? url : url + "/" + id;
        return (await axios.get(newUrl, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function getMedRecs(url) {
    try {
        return (await axios.get(url, { withCredentials: true })).data;
    } catch (e) {
        return e.response.data;
    }
}

async function updateMedRec(url, item, id) {
    try {
        let newUrl = !item ? url : url + "/updateMedRec/" + id;
        return (await axios.put(
            newUrl,
            item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )).data;
    } catch (e) {
        return e.response.data;
    }
}

export {
    get, post, getAppointmentsDoctor, getAppointments, getAppointmentsAll, getDoctor, getPatient,
    postAppointment, updateAppointment, deleteAppointment, getAppointmentsPatient, getAppointmentsPatientId,
    updateAppointmentPatient, getDoctors, getMedRecs, updateMedRec, getMedRec, postAppointmentDoctor
};