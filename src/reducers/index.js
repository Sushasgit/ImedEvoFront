import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { modelReducer, formReducer } from 'react-redux-form';
import authReducer from './authReducer';
import LocationReducer from './locationReducer';
import searchReducer from './searchReducer';
import getAllReducer from './getAllReducer';
import signupClinicReducer from './signupClinicReducer';
import changePassword from './changePasswordReducer';
import getAppointmentReducer from './getAppointmentsUserReducer';
import ModalReducer from './modalReducer'

const rootReducer = combineReducers({
  form,
    modal:ModalReducer,
  auth: authReducer,
  location: LocationReducer,
  searchResult: searchReducer,
  allResults: getAllReducer,
  signupClinic: signupClinicReducer,
  message: changePassword,
  events:getAppointmentReducer,
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
});

export default rootReducer;