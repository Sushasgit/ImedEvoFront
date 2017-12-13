import testReducer from './testReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers(({
  router: routerReducer,
  testReducer
}));
export default rootReducer;