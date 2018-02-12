import axios from 'axios';
import { history } from '../history';
import {
  AUTH_USER,
  AUTH_ERROR,
  RESET_PASSWORD,
  UNAUTH_USER
} from './types';

const ROOT_URL = "http://54.37.125.178:80";

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/users/login?email=${email}&password=${password}`,{ email, password })
      .then(response => {
        if (response.data.status.code === 710){
          dispatch(authSuccess(response.data.user));
          history.push(`/profile/${response.data.user.id}`);
        } else{
          dispatch(authError('Что то пошло не так'));
        }
      })
      .catch(() => {
        dispatch(authError('Что то пошло не так'));
      });
  }
}

export function signupUser({ password, email, lastName, firstName, birthDate, phone }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/users/registration`,{password, email, lastName, firstName, birthDate, phone})
      .then(response => {
        if (response) {
          dispatch(authSuccess(response.data.user));
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

export function ForgotPassword({ email }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/forgot/reset?email=${email}`, { email })
      .then(response => {
       if(response.data.status.code === 50){
         dispatch(resetSucces(response.data.status.message));
       }
      })
      .catch((error) => {
        console.log(error)
        dispatch(resetFailure("Пользователь не найден,проверьте пожалуйста Ваш email"));
      });
  }
}

export function resetSucces(response) {
  return {
    type: RESET_PASSWORD,
    payload: response
  };
}

export function resetFailure(response) {
  return {
    type: RESET_PASSWORD,
    payload: response
  };
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
