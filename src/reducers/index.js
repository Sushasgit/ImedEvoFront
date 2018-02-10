import { combineReducers } from 'redux';
import { alert } from './alertReducer'
import { reducer as form } from 'redux-form';
import { modelReducer, formReducer } from 'react-redux-form';
import authReducer from './authReducer';
import LocationReducer from './locationReducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  alert,
  location: LocationReducer,
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

export default rootReducer;