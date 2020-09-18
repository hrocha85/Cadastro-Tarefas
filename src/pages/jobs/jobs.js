import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor } from '../../Components/redux/createStore';
import InputSelection from '../../Components/componentsNotes/InputSection'
import NotesSection from '../../Components/componentsNotes/NotesSection';

export class jobs extends Component {
    render() {
        return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <InputSelection />
        <NotesSection/>
        </PersistGate>
      </Provider>
        )
    }
}

export default jobs;