import { combineReducers } from 'redux';
import notes from './tarefas';
import inputs from './inputs';

export default combineReducers({
  notes,
  inputs,
})
