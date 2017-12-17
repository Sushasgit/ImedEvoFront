import React from 'react';
import {render} from 'react-dom';
import './index.css';
import 'normalize.css/normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
document.getElementById('root')
);

registerServiceWorker();
