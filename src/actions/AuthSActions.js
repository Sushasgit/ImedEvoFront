import axios from 'axios';
import { history } from '../history';
import {
  AUTH_USER,
  AUTH_ERROR,
} from '../constants/constants';
import * as constants from '../constants/constants'


export function signupUser({ password, email, lastName, firstName, birthDate, phone }) {
  return (dispatch) => {
    axios.post(`${constants.ROOT_URL}/users/registration`,{password, email, lastName, firstName, birthDate, phone})
      .then(response => {
        if (response) {
          dispatch(authSuccess(response.data.user));
          document.body.classList.remove(constants.MODAL_OPEN_CLASS);
          history.push(`/profile/${response.data.user.id}`)
        } else{
          dispatch(authError('Что то пошло не так'));
        }
      })
      .catch(error => {
        {console.log("Error: " + error)}
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function authSuccess(success) {
  return {
    type: AUTH_USER,
    payload: success
  };
}
