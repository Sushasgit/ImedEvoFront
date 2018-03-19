
import * as constants from '../constants/constants'

const initialState =  {
    isShowingSignInModal: false,
    isShowingSignUpModal:false,
    isShowingAppointmentDoctorModal:false
};

export default function modal(state = initialState, action) {
    switch(action.type) {
        case constants.SHOW_MODAL:
            return {
                ...state,
                [action.payload]: true,
            };
        case constants.HIDE_MODAL:
            return {
                initialState
            };
        default:
            return state;
    }
}
