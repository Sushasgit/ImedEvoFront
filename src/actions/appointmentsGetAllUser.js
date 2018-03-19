import * as constants from '../constants/constants';
import axios from 'axios';
import * as helpers from '../helpers/helpers';

export function getAppoinmentsUser() {
    return function (dispatch) {
        document.body.classList.remove(constants.MODAL_OPEN_CLASS);
        let token = helpers.getToken();
        let idUser = helpers.getId();
        axios.get(`${constants.ROOT_URL}/appointments/byusers/${idUser}`,
            {
                headers: {Authorization: 'Bearer ' + token}
            })
            .then(response => {
                document.body.classList.remove(constants.MODAL_OPEN_CLASS);
                const appointments =
                    response.data
                        .map(
                            (u) => {
                                return Object.assign({}, u)
                            }
                        )
                        .map(
                            (u) => {
                                u.start = u.date;
                                u.end = u.date;
                                u.title = `Вы записаны к специалисту ${u.doctorName} на ${u.time}`;
                                return u
                            }
                        );

                response ? dispatch(getAppointmentsSuccess(appointments)) : dispatch(getAppointmentsFailed('Что то пошло не так'))
            })
    }
}

export function getAppointmentsSuccess(events) {
    return {
        type: constants.GET_APPOINTMENT_SUCCESS,
        payload: events
    }
}

export function getAppointmentsFailed(message) {
    return {
        type: constants.GET_APPOINTMENT_FAILED,
        payload: message
    }
}