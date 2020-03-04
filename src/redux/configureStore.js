import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {name as appName} from '../../app.json';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  keyPrefix: appName,
  storage: AsyncStorage,
  whitelist: ['global', 'auth', 'currencies', 'offers', 'device'],
  // blacklist: ['sample'],
  // stateReconciler: autoMergeLevel2,
};

const middlewares = [thunk, promise];
if (__DEV__ === true) {
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return {store, persistor};
};
