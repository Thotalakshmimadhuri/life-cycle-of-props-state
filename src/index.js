import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //const App = require("App")
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
     <App />   
    </React.StrictMode>
 document.getElementById('root')
);

// If You want to start measuring performance in your app, pass a function
// To log results (For example: reportWebVitals(console.log))
// Are send it to an analytics endpoint. Learn moreMore: https://bit.ly/CRA-vitals
reportWebVitals();