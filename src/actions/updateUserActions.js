//TODO DELETE THIS FUNCTION WHEN WE HAVE TOKEN AFTER REGISTRATION
import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
} from '../constants/constants';
import * as helpers from '../helpers/helpers';
import * as constants from '../constants/constants'
import axios from 'axios'

export function updateUser ({email, firstName, lastName}) {
  return function (dispatch) {
    let id = helpers.getId()
    axios.put(`${constants.ROOT_URL}/users/updateuser}`, {id, email, firstName, lastName})
      .then(response => {
        document.body.classList.remove(constants.MODAL_OPEN_CLASS);
        if (response.status === 200) {
          console.log('get successful')
          dispatch(upDateSuccess(response.data))
        }
        else if (response.status === 401) {
          dispatch(updateError('Проверьте правильность заполненных данных'))
        }
      })
  }
}

export function updateError(error) {
  return {
    type: UPDATE_USER_FAILED,
    payload: error
  };
}

export function upDateSuccess(success) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: success
  };
}