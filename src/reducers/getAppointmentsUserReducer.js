import * as constants from '../constants/constants'

const INITIAL_STATE = {
    error: '',
    message: '',
    events: [],
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case constants.GET_APPOINTMENT_SUCCESS:
            return {...state, events: action.payload};

        case constants.GET_APPOINTMENT_FAILED:
            return {...state, error: action.payload};

        default:
            return state;
    }
}