import { combineReducers } from 'redux';
import authReducer from './auth';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'joyage',
    storage,
    whitelist: ['auth']

}
const rootReducer = combineReducers({
    auth: authReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);


export default persistedReducer;