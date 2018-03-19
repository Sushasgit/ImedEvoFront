import {
    CLINIC_AUTH_SUCCESS,
    CLINIC_AUTH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    error: '',
    authenticated: false,
    clinic: {}
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case  CLINIC_AUTH_SUCCESS:
            return {...state, error: '', authenticated: true, clinic: action.payload};
        case CLINIC_AUTH_ERROR:
            return {...state, authenticated: false, error: action.payload};
        default:
            return state;
    }
}