import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { chartsReducer } from '../reducers';
import { thunk } from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initialState = {};

const reducer = combineReducers({
  charts: chartsReducer,
});

const persistConfig = {
  key: 'charts',
  storage,
  // whitelist: ["members"]
};

const persistedReducer = persistReducer(persistConfig, reducer);


// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

export const store = createStore(persistedReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export const persistor = persistStore(store);
