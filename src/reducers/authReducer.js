import * as constants from '../constants/constants'


const INITIAL_STATE = {
    error: '',
    authenticated: false,
    message: '',
    user: {},
    registrationSuccess: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case constants.AUTH_USER:
            return {...state, error: '', authenticated: true, user: action.payload};

        case constants.UNAUTH_USER:
            return {...state, authenticated: false, error: action.payload};

        case constants.UPDATE_USER_SUCCESS:
            return {
                ...state,
                error: '',
                authenticated: true,
                user: action.payload,
                message: 'Ваш профиль успешно обновлен'
            };

        case constants.UPDATE_USER_FAILED:
            return {...state, authenticated: false, error: action.payload};

        case constants.AUTH_ERROR:
            return {...state, error: action.payload};

        case constants.FETCH_MESSAGE:
            return {...state, message: action.payload};

        case constants.SIGNUP_ERROR:
            return {...state, registrationSuccess: false, error: action.payload};

        case constants.SIGNUP_USER_SUCCESS:
            return {...state, registrationSuccess: true, message: 'Вы успешно зарегстрировались!'};
        default:
            return state;
    }
}