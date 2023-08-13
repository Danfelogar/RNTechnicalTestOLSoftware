//dependencies
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';

//components
import {Dashboard, ProjectList, Projects, Users, UsersList} from '../screens';
import {MainHeader} from '../components';
import {dummyServices} from '../services';
import {selectUser} from '../redux/selectors/auth.selector';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {addRolUser} from '../redux/actions';

export type RootStackPrivateParams = {
  Dashboard: undefined;
  ProjectList: undefined;
  Projects: {
    id: number | 'undefined';
  };
  UsersList: undefined;
  Users: undefined;
};

const Stack = createStackNavigator<RootStackPrivateParams>();

export function PrivateNavigation() {
  //globalContext
  const user = useAppSelector(selectUser());
  const dispatch = useAppDispatch();
  //logic for get rol in user for private root
  async function getRol(val: number) {
    return await dummyServices
      .get('/rols', {params: {id: val}})
      .then(res => {
        return dispatch(addRolUser(res.data.data[0].name));
      })
      .catch(err => {
        return console.log({err});
      });
  }
  useEffect(() => {
    if (user?.userId) {
      getRol(user?.userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.userId]);

  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        header: () => <MainHeader />,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ProjectList" component={ProjectList} />
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="UsersList" component={UsersList} />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
}
