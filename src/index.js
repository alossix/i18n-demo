import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ModeContextProvider } from './store/mode-context';

ReactDOM.render(
  <React.StrictMode>
    <ModeContextProvider>
      <App />
    </ModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
