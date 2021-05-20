import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'normalize-css';
import "./css/styles.css";
import { NamesProvider } from './providers/names';

ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <App/>
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
