import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import {fetchOffersAction} from './store/thunk/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store} stabilityCheck="never">
      <App/>
    </Provider>
  </React.StrictMode>
);
