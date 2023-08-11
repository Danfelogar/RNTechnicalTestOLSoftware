//dependencies
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

//components
import {Dashboard, Login} from '../screens';

export type RootStackMainParams = {
  Login: undefined;
  Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackMainParams>();

export function NavigationMain() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      {/* {isLoggedIn === 'logout' && (
        <>

          <Stack.Screen name="Register" component={Register} />
        </>
      )}
      {isLoggedIn === 'login' && (
        <>
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="UserDetails" component={UserDetails} />
        </>
      )} */}
    </Stack.Navigator>
  );
}
