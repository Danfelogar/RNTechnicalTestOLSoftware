//dependencies
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

//components
import {Dashboard} from '../screens';
import {MainHeader} from '../components';

export type RootStackPrivateParams = {
  Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackPrivateParams>();

export function PrivateNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        header: () => <MainHeader />,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
