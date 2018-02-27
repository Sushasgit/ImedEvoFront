import * as constants from '../constants/constants'

const INIT_STATE = {
  message: ""
}

export default function changePassword (state = INIT_STATE, action) {
  switch (action.type) {
    case constants.RESET_PASSWORD:
      return {...state, message: action.payload}

    case constants.CHANGE_PASSWORD_SUCCSES:
      return {...state, message: action.payload}

    case constants.CHANGE_PASSWORD_FAILED:
      return {...state, message: action.payload}

    default:
      return state
  }
}
