import { combineReducers } from 'redux';
import { alert } from './alertReducer'
import { reducer as form } from 'redux-form';
import { modelReducer, formReducer } from 'react-redux-form';
import authReducer from './authReducer';
import LocationReducer from './locationReducer';
import searchReducer from './searchReducer';
import getAllReducer from './getAllReducer';
import signupClinicReducer from './signupClinicReducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  alert,
  location: LocationReducer,
  searchResult: searchReducer,
  allResults: getAllReducer,
  signupClinic: signupClinicReducer,
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