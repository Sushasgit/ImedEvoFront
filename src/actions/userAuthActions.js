import * as constants from '../constants/constants';
import { toastr } from 'react-redux-toastr';
import history from '../history';


export function registrationAsync(authData) {
  return dispatch => {
    console.log('test')
    var data= {email:"suwa9999@mail.ru",password:"1888823456789",phone:"+3809888839785967",birthDate:"1991-02-02",name:"suwa"}
    fetch('http://54.37.125.178:8080/users/registration', {
      method: 'post',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}