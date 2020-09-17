import { combineReducers } from 'redux';
import notes from './tarefas';
import inputs from './inputs';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist';


const persistConfig = {
  key:'root',
  storage,
  whitelist:['notes','input']
};

const rootReducer = combineReducers({
  notes,
  inputs,
})

export default persistReducer(persistConfig,rootReducer);



// export default combineReducers({
//   notes,
//   inputs,
// })
