//TODO DELETE THIS FUNCTION WHEN WE HAVE TOKEN AFTER REGISTRATION

import {
  AUTH_USER,
  AUTH_ERROR,
} from '../constants/constants'

import * as constants from '../constants/constants'
import axios from 'axios'

export function getUser (token, id) {
  return function (dispatch) {
    axios.get(`${constants.ROOT_URL}/users/${id}`,
      {
        headers: {Authorization: 'Bearer ' + token}
      })
      .then(response => {
        document.body.classList.remove(constants.MODAL_OPEN_CLASS)
        if (response.status === 200) {
          dispatch(authSuccess(response.data))
        }
        else if (response.status === 401) {
          dispatch(authError('Проверьте правильность заполненных данных'))
        }
      })
  }
}

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function authSuccess (success) {
  return {
    type: AUTH_USER,
    payload: success
  }
}