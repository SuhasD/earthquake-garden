import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';

const appRouting = (
    <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  );

ReactDOM.render(
    appRouting,
    document.getElementById('root')
);