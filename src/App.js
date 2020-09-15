import React from 'react';
import { Provider } from 'react-redux';
import store from './Components/redux/createStore'
import InputSelection from './Components/componentsNotes/InputSection'

import './App.css';
import NotesSection from './Components/componentsNotes/NotesSection';

function App() {
  return (
    <Provider store={store}>
      <div>
      <InputSelection />
      <div className="line"><h1>___________________________</h1></div>
      <NotesSection/>
      </div>
    </Provider>
  );
}

export default App;
