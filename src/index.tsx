import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); // Ao utilizar o "!", eu estou garantindo para o TS que o html nuunca será nulo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);