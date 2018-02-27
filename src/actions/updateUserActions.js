//TODO DELETE THIS FUNCTION WHEN WE HAVE TOKEN AFTER REGISTRATION
import * as helpers from '../helpers/helpers'
import * as constants from '../constants/constants'
import { history } from '../history'
import axios from 'axios'

export function updateUser ({username, firstName, lastName, phone}) {
  return function (dispatch) {
    let id = helpers.getId()
    let token = helpers.getToken()
    axios.put(`${constants.ROOT_URL}/users/updateuser`, {id, username, firstName, lastName, phone},
      {
        headers: {Authorization: 'Bearer ' + token}
      })
      .then(response => {
        document.body.classList.remove(constants.MODAL_OPEN_CLASS)
        if (response.data.status.code === 730) {
          dispatch(upDateSuccess(response.data.user))
          history.push(`/profile/${response.data.user.id}`)
        }

        else if (response.data.status.code === 731) {
          dispatch(updateError('Проверьте правильность заполненных данных'))
        }

        else if (response.status === 401) {
          dispatch(updateError('Проверьте правильность заполненных данных'))
        }
      })
  }
}

export function updateError (error) {
  return {
    type: constants.UPDATE_USER_FAILED,
    payload: error
  }
}

export function upDateSuccess (success) {
  return {
    type: constants.UPDATE_USER_SUCCESS,
    payload: success
  }
}