import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import redusers from './reducers';
import history from './history';
import thunk from 'redux-thunk';
import App from './App';


const defaultStore = {};
const middlewareHistory = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  redusers,
  defaultStore,
  composeEnhancers(applyMiddleware(thunk, middlewareHistory))
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);

