import * as constants from '../constants/constants'
import axios from 'axios';
import { history } from '../history';

export  function makeAppoinment(userId, doctorId, time, date) {
  return function(dispatch) {
    dispatch(makeAppointmentDoctorRequest())
    document.body.classList.remove(constants.MODAL_OPEN_CLASS)
    axios.post(`${constants.ROOT_URL}/appointments/addappointment`, {userId, doctorId, time, date})
      .then(response => {
        if (response.data.status.code === 752) {
          dispatch(makeAppointmentDoctorSuccess(response.data))
          history.push(`/profile/${response.data.appointment.userId}`)
        }
      })
      .catch((error) => {
        console.log(error)
        dispatch(makeAppointmentDoctorFailed('Проверьте правильнсть заполненных данных'))
      })
  }
}

export function makeAppointmentDoctorSuccess(appointment) {
  return {
    type: constants.MAKE_APPOINTMENT_SUCCESS,
    payload: appointment
  };
}

export function makeAppointmentDoctorRequest() {
  return {
    type: constants.MAKE_APPOINTMENT_REQUEST,
    isLoading:true
  };
}

export function makeAppointmentDoctorFailed() {
  return {
    type: constants.MAKE_APPOINTMENT_FAILED,
    isLoading:true
  };
}