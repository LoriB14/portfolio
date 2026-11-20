import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

if (new URLSearchParams(location.search).has('static')) document.documentElement.classList.add('static');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
