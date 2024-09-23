import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById('root');
rootElement.style.width = '100vw'; // Set width to cover entire viewport width
rootElement.style.height = '100vh'; // Set height to cover entire viewport height

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
