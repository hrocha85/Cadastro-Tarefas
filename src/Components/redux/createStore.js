import { createStore } from 'redux';
import rootReducers from './reducers';
import { persistStore} from 'redux-persist';



export const store = createStore(rootReducers)

export const persistor = persistStore(store);


export default {store, persistor }; 



//------
// import { createStore } from 'redux';
// import rootReducers from './reducers';


// export default createStore(rootReducers);

