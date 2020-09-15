import React, { Component } from 'react';
// import Nav2 from '/Users/henriquerocha/desenvolvimento/my-app/src/Components/nav/nav2';
// import FormTarefas from '/Users/henriquerocha/desenvolvimento/my-app/src/Components/form-tarefas/formTarefas';

import { Provider } from 'react-redux';
import store from '../../Components/redux/createStore'
import InputSelection from '../../Components/componentsNotes/InputSection'
import NotesSection from '../../Components/componentsNotes/NotesSection';

export class jobs extends Component {
    render() {
        return (
      <Provider store={store}>
        <InputSelection />
        <NotesSection/>
      </Provider>
        )
    }
}

export default jobs
