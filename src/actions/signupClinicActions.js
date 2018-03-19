import * as constants from '../constants/constants';
import * as types from './types';
import axios from 'axios';

export function signupClinic({clinicName, address, phoneNumber, email, services}) {
    return function (dispatch) {
        axios.post(`${constants.ROOT_URL}/clinics/createclinic`, {clinicName, address, phoneNumber, email, services})
            .then(response => {
                if (response.data.status.code === 900) {
                    console.log(response.data);
                    dispatch(clinicAuthSuccess(response.data));
                } else {
                    dispatch(clinicAuthError('Что то пошло не так'));
                }
            })
            .catch(error => {
                console.log("Ошибка! " + error)
            });
    }
}

export function clinicAuthError(error) {
    return {
        type: types.CLINIC_AUTH_ERROR,
        payload: error
    };
}

export function clinicAuthSuccess(success) {
    return {
        type: types.CLINIC_AUTH_SUCCESS,
        payload: success
    };
}
