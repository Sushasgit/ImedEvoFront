import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import modal from './ModalReducer';

export default combineReducers({
  loginUser: modelReducer('loginUser', { email: '', password: '' }),
  loginUserForm: formReducer('loginUser', { email: '', password: '' }),
  registrationUser: modelReducer('registrationUser', {
    email: '',
    password: '',
    rePassword: ''
  }),
  registrationUserForm: formReducer('registrationUser', {
    email: '',
    password: '',
    rePassword: ''
  }),

  regDoc: modelReducer('regDoc', {
    username:'',
    passwordDoc:'',
    favoiriteColor:''
  }),
  RegDoc: formReducer('regDoc', {
    username:'',
    passwordDoc:'',
    favoiriteColor:''
  }),

  regClinic: modelReducer('regClinic', {
    clinicname:'',
    clinicaddress:'',
    clinicphone:'',
    clinicemail:'',
    clinicschedule:'',
    cliniceservices:''
  }),
  regClinicForm: formReducer('regClinic', {
    clinicname:'',
    clinicaddress:'',
    clinicphone:'',
    clinicemail:'',
    clinicschedule:'',
    cliniceservices:''
  })

});