// //dependencies
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import notificationsReducer from './reducer/notifications.reducer';
import authReducer from './reducer/auth.reducer';
// //components
// import rootReducer from './reducer';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage: AsyncStorage,
//   whitelist: ['auth'],
//   blacklist: ['notifications'],
// };
const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};
// combineReducers({
//   auth: authReducer,

// });

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  notifications: notificationsReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  let persistor = persistStore(store);
  return {store, persistor};
};
