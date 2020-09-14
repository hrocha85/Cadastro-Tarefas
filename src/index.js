import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import store from './app/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Headers from './Components/nav/nav.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Components/routes';



ReactDOM.render(
  <React.StrictMode>
    <Headers />
    <Routes />
    </React.StrictMode>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// {/* 
//     <React.StrictMode>
//     <Provider store={store}>
  
//     </Provider> 
//     </React.StrictMode>
//   <Headers />
// <Home /> */}