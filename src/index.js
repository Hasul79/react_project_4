import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ClassComponent from './ClassComponent/ClassComponent';
import App from './Function/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassComponent />
    <App />
  </React.StrictMode>
);


reportWebVitals();
