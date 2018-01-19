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
  searchResult:modelReducer('searchResult',{}),
  modalName: modal,
  router: routerReducer,
});