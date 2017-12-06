import testReducer from './testReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(({
  testReducer
}));
export default rootReducer;