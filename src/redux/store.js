import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist'
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger, thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);

