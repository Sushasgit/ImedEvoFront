import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { routerMiddleware } from 'react-router-redux';
import { createStore } from 'redux';
import history from './history';
import redusers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const defaultStore = {};
// const history = createHistory();
// const middlewareHistory = routerMiddleware(history);

const store = createStore(
  redusers,
  defaultStore,
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();