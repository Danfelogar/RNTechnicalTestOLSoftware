//dependencies
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {NavigationContainer} from '@react-navigation/native';

//contexts
import {ThemeProvider} from './src/context';

//components
import {NavigationMain} from './src/navigation';
import createPersistedStore from './src/redux/store';

const {store, persistor} = createPersistedStore();

function App(): JSX.Element {
  return (
    <AppState>
      <NavigationContainer>
        <NavigationMain />
      </NavigationContainer>
    </AppState>
  );
}

function AppState({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
