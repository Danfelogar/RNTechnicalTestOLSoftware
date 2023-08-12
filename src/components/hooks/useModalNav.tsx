//dependencies
import {useContext} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';
//helpers
import {heightFullScreen} from '../../helpers';
//components
import {ThemeContext, UIContext} from '../../context';

export function useModalNav() {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {changeStateModalNav} = useContext(UIContext);
  const {name} = useRoute();
  const navigation = useNavigation<any>();
  //Render navList
  const navList = [
    {
      id: 1,
      icon: (
        <MaterialCommunityIcons
          name="view-dashboard-outline"
          size={heightFullScreen / 27}
          color={name === 'Dashboard' ? colors.primary : colors.textDisabled}
        />
      ),
      name: 'Dashboard',
      nav: 'Dashboard',
    },
    {
      id: 2,
      icon: (
        <FontAwesome5
          name="clipboard-list"
          size={heightFullScreen / 27}
          color={name === 'ProjectList' ? colors.primary : colors.textDisabled}
        />
      ),
      name: 'Lista de proyectos',
      nav: 'ProjectList',
    },
    {
      id: 3,
      icon: (
        <EvilIcons
          name="user"
          size={heightFullScreen / 27}
          color={name === 'UsersList' ? colors.primary : colors.textDisabled}
        />
      ),
      name: 'Lista de usuarios',
      nav: 'UsersList',
    },
  ];

  //navigate redirection
  function getRedirection(navName: string) {
    navigation.navigate(navName);
    changeStateModalNav();
  }
  return {
    //state
    navList,
    name,
    //methods
    //functions
    getRedirection,
  };
}
