import axios from 'axios'
import { history } from '../history'
import {
  AUTH_USER,
  AUTH_ERROR,
} from '../constants/constants'
import * as constants from '../constants/constants'

export function signupUser ({password, username, lastName, firstName, birthDate, phone}) {
  return (dispatch) => {
    axios.post(`${constants.TEST_ROOT_URL}/users/registration`, {
      password,
      username,
      lastName,
      firstName,
      birthDate,
      phone
    })
      .then(response => {
        console.log(response)
        console.log(response.data.status.code)
        if (response.data.status.code === 700) {
          dispatch(authSuccess(response.data.user))
          document.body.classList.remove(constants.MODAL_OPEN_CLASS)
          history.push(`/profile/${response.data.user.id}`)
        }
        else if (response.data.status.code === 708) {
          dispatch(authError('Дата Рождения введена не верно'))
        }

        else if (response.data.status.code === 702) {
          dispatch(authError('Такой пользователь уже существует'))
        }
      })
      .catch(error => {
        {console.log('Error: ' + error)}
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
