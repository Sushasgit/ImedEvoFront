import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import HttpsRedirect from 'react-https-redirect';
import { store } from './store';
import { App } from '../src/components/App/App';


//

render(
  <Provider store={store}>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();