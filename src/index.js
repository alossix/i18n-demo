import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LangContextProvider } from './store/lang-context';
import { ModeContextProvider } from './store/mode-context';

ReactDOM.render(
  <React.StrictMode>
    <ModeContextProvider>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </ModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
