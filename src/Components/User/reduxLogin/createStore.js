import { createStore } from 'redux';
import rootReducers from './reducerslogin';
import { persistStore} from 'redux-persist';



export const store = createStore(rootReducers)

export const persistor = persistStore(store);


export default {store, persistor }; 




