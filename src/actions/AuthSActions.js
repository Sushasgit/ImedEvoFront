import axios from 'axios'
import {
    SIGNUP_ERROR,
    SIGNUP_USER_SUCCESS,
} from '../constants/constants'
import * as constants from '../constants/constants'
import * as helpers from '../helpers/helpers'

export function signupUser({password, username, lastName, firstName, birthDate, phone}) {
    phone = phone.replace(/\s/g, '');
    return (dispatch) => {
        axios.post(`${constants.ROOT_URL}/users/registration`, {
            password,
            username,
            lastName,
            firstName,
            birthDate,
            phone
        })
            .then(response => {
                if (response.data.status.code === 700) {
                    dispatch(authSuccess());
                    document.body.classList.remove(constants.MODAL_OPEN_CLASS);
                    helpers.setId(response.data.user.id);
                }
                else if (response.data.status.code === 708 || response.data.status.code === 706) {
                    dispatch(authError('Дата Рождения введена не верно'))
                }

                else if (response.data.status.code === 705) {
                    dispatch(authError('Не заполнен номер телефона'))
                }

                else if (response.data.status.code === 702) {
                    dispatch(authError('Такой пользователь уже существует'))
                }

                else if (response.data.status.code === 707) {
                    dispatch(authError('Имя или фамилия не заполнены'))
                }

                else if (response.data.status.code === 709) {
                    dispatch(authError('Телефон введен не верно'))
                }
            })
            .catch(error => {
                console.log('Error: ' + error)
            })
    }
}

export function authError(error) {
    return {
        type: SIGNUP_ERROR,
        payload: error,
        registrationSuccess: false
    }
}

export function authSuccess() {
    return {
        type: SIGNUP_USER_SUCCESS,
        registrationSuccess: true
    }
}
