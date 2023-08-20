//dependencies
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import AsyncStorage from '@react-native-async-storage/async-storage';
//types
import {initialStateAuth} from '../reducer/auth/_initialState';
import {IAuthState} from '../reducer/auth/_interfaces';
import {initialStateNotifications} from '../reducer/notifications/_initialState';
import {INotificationsState} from '../reducer/notifications/_interfaces';
//components
import reducers from '../reducer';

export interface IReduxStore {
  auth: IAuthState;
  notifications: INotificationsState;
}

export const storeInitialState = {
  auth: initialStateAuth,
  notifications: initialStateNotifications,
};

//persist config
const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  blacklist: ['notifications'],
};

const persisReduce = persistReducer(persistConfig, reducers);

const reduxInmmutableStateInvariant =
  require('redux-immutable-state-invariant').default();

//Config store
export const store = configureStore({
  reducer: persisReduce,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? [
          ...getDefaultMiddleware({serializableCheck: false}),
          reduxInmmutableStateInvariant,
        ]
      : getDefaultMiddleware({
          serializableCheck: false,
        }),
  preloadedState: storeInitialState,
  devTools: __DEV__,
});

// @ts-ignore
export const persistor = persistStore(store);
