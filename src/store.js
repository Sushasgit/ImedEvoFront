import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../src/reducers/index';
import  promiseMiddleware from '../src/reducers/locationMiddleware';

const loggerMiddleware = createLogger(
  {
    collapsed:true
  }
);

export const store = createStore(
  rootReducer,
  applyMiddleware(
    promiseMiddleware,
    thunkMiddleware,
    loggerMiddleware
  )
);