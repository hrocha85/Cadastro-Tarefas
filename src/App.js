import React from 'react';
import { Provider } from 'react-redux';
import {store, persistor } from './Components/User/reduxLogin/createStore';
import InputSectionLogin from "./Components/User/ComponentesLogin/InputSelectionLogin";
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <InputSectionLogin></InputSectionLogin>
    </PersistGate>
    </Provider>
  );
}

export default App;
