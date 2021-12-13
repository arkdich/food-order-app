import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '@store';
import { StyleSheetManager } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStore()}>
        <StyleSheetManager
          disableVendorPrefixes={process.env.NODE_ENV === 'development'}
        >
          <App />
        </StyleSheetManager>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
