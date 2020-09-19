import { combineReducers } from 'redux';
import user from './users';
import inputs from './inputs';
import storage from 'redux-persist/lib/storage';
// import notes from '../../../redux/reducers/'

import { persistReducer } from 'redux-persist';
// import tarefas from '../../redux/reducers/tarefas';


const persistConfig = {
  key:'root',
  storage,
  
};

const rootReducer = combineReducers({
  
  user,  
  inputs,
})

export default persistReducer(persistConfig,rootReducer);



