import * as constants from '../constants/constants'

const INIT_STATE = {
  message: null
}

export default function changePassword (state = INIT_STATE, action) {
  switch (action.type) {
    case constants.CHANGE_PASSWORD_SUCCSES:
      return {message: action.payload}

    case constants.CHANGE_PASSWORD_FAILED:
      return {message: action.payload}

    default:
      return state
  }
}
