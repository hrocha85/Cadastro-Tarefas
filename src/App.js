import React from 'react';
import { Provider } from 'react-redux';
import store from './Components/redux/createStore'


import './App.css';

function App() {
  return (
    <Provider store={store}>
    
    </Provider>
  );
}

export default App;
