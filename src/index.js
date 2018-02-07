import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { store } from './store';
import { App } from '../src/components/App/App';
var registerObserver = require('react-perf-devtool')

// Simple, no?
registerObserver()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();