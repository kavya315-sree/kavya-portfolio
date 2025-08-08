import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // You can leave this empty if using Tailwind via CDN
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
