import { combineReducers } from 'redux';
import { alert } from './alertReducer'
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  alert
});

export default rootReducer;