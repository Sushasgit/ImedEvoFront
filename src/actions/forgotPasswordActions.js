import {
  RESET_PASSWORD,
  CHANGE_PASSWORD_SUCCSES,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_FAILED
} from '../constants/constants'
import { history } from '../history'
import * as constants from '../constants/constants'
import axios from 'axios'

export function forgotPassword ({email}) {
  return function (dispatch) {
    document.body.classList.remove(constants.MODAL_OPEN_CLASS)
    axios.post(`https://www.imed.od.ua/forgot/reset?email=${email}`, {email})
      .then(response => {
        if (response.data.status.code === 50) {
          dispatch(resetSucces(response.data.status.message))
        }
      })
      .catch((error) => {
        console.log(error)
        dispatch(resetFailure('Пользователь не найден,проверьте пожалуйста Ваш email'))
      })
  }
}

export function changePassword ({token, newPassword}) {
  return function (dispatch) {
    axios.post(`https://www.imed.od.ua/forgot/newpassword?token=${token}&newpassword=${newPassword}`)
      .then(response => {
        if (response.data.status.code === 53) {
          dispatch(changeSuccses(response.data.status.message))
          history.push(`/home`)
        } else {
          dispatch(changeSuccses('Пароль успешно изменён'))
        }
      })
      .catch((error) => {
        console.log(error)
        dispatch(changeFailed('Пароль не изменён, попробуйте снова'))
      })
  }
}

export function resetSucces (response) {
  return {
    type: RESET_PASSWORD,
    payload: response
  }
}

export function resetFailure (response) {
  return {
    type: constants.RESET_PASSWORD_FAILED,
    payload: response
  }
}

export function changeSuccses (response) {
  return {
    type: CHANGE_PASSWORD_SUCCSES,
    payload: response
  }
}

export function changeFailed (response) {
  return {
    type: CHANGE_PASSWORD_FAILED,
    payload: response
  }
}
