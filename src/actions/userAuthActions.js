import * as constants from '../constants/constants';
import { toastr } from 'react-redux-toastr';
import history from '../history';
// var axios = require("axios");


//
// export function registrationAsync(authData) {
//   console.log('registrationAsyncACTION');
//   console.log(JSON.stringify(authData))
//   return dispatch => {
//     if (axios.defaults.headers.common.hasOwnProperty('Authorization')) {
//       delete axios.defaults.headers.common.Authorization;
//     }
//       axios.post('http://54.37.125.178:8080/users/registration', authData).then(function(response){
//         console.log(response.data);
//       }).catch(function(error){
//         console.log(error)
//       });
//   };
// }

export function registrationAsync(authData) {
  return dispatch => {
    var data= {
      "name":"suwa",
      "email": "suwa334445@test",
      "password": "123456789",
      "phone": "+99999999999",
      "birthDate": "1990-02-03"
    }
    fetch('http://54.37.125.178:8080/users/registration', {
      method: 'post',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    })
      .then(res => console.log(res))
      
      .catch(res=> console.log(res));
  }
}