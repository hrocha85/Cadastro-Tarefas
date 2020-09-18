import { combineReducers } from 'redux';
import notes from './tarefas';
import inputs from './inputs';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';


const persistConfig = {
  key:'root1',
  storage,
  whitelist:['notes','input']
};

const rootReducer = combineReducers({
  notes,
  inputs,
})

export default persistReducer(persistConfig,rootReducer);



