import * as constants from '../constants/constants'

const INITIAL_STATE = {
  error: '',
  approved: false,
  message: '',
  appointment: {},
  isLoading: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.MAKE_APPOINTMENT_SUCCESS:
      return {...state, error: '', approved: false, appointment: action.payload}

    case constants.MAKE_APPOINTMENT_REQUEST:
      return {...state, isLoading: true}

    case constants.MAKE_APPOINTMENT_FAILED:
      return {...state, error: action.payload}

  }
  return state
}