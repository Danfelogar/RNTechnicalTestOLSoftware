//dependencies
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';

//components
import {Login} from '../screens';
import {PrivateNavigation} from './PrivateNavigation';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

import {authSelectors} from '../redux/selectors/authSelectors';
import {authActionsSelectors} from '../redux/actions';

export type RootStackMainParams = {
  Login: undefined;
  PrivateNavigation: undefined;
};

const Stack = createStackNavigator<RootStackMainParams>();

export function NavigationMain() {
  //globalContext
  const dispatch = useAppDispatch();
  const {revalidateUser, clearUserCredentials} = authActionsSelectors();
  const {selectIsAuth, selectUserJWT} = authSelectors();
  const isUserAuth = useAppSelector(selectIsAuth());
  const userJWT = useAppSelector(selectUserJWT());

  //validated credentials for roots
  useEffect(() => {
    if (userJWT) {
      dispatch(revalidateUser(userJWT));
    } else {
      dispatch(clearUserCredentials());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isUserAuth === 'pending') {
    //show splashScreen with logo
    return <></>;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isUserAuth === 'valid' && (
        <Stack.Screen name="PrivateNavigation" component={PrivateNavigation} />
      )}
      {isUserAuth === 'denied' && (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}
