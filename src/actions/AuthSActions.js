import axios from 'axios';
import { history } from '../history';
import {
  AUTH_USER,
  AUTH_ERROR,
  // UNAUTH_USER,
  // FETCH_MESSAGE
} from './types';

const ROOT_URL = "http://54.37.125.178:8080";

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}//users/login?email=${email}&password=${password}`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        // TODO save token to cookie or localStorage
        let testData = {email,password}
        localStorage.setItem('testData', JSON.stringify(testData));
        /*localStorage.setItem('token', response.data.token);*/
        history.push(`/profile/${response.data.user.id}`);
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ password, email, lastName, firstName, birthDate, phone }) {
  return (dispatch, state) => {
    axios.post(`${ROOT_URL}/users/registration`,
      {password, email, lastName, firstName, birthDate, phone})
      .then(response => {
        console.log(response)
        dispatch({ type: AUTH_USER });
        // TODO save token to cookie or localStorage
        localStorage.setItem('testData', JSON.stringify(testData));
        // localStorage.setItem('token', response.data.token);
        history.push(`/profile/${response.data.user.id}`);
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
