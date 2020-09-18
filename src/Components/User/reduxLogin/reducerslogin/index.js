import { combineReducers } from 'redux';
import user from './tarefas';
import inputs from './inputs';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';


const persistConfig = {
  key:'root',
  storage,
  
};

const rootReducer = combineReducers({
  user,
  inputs,
})

export default persistReducer(persistConfig,rootReducer);



