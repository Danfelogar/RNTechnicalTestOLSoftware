//dependencies
import React, {useContext, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Avatar, Badge} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
//styles
import {headerStyles} from './styledComponent';
//helpers
import {heightFullScreen, widthFullScreen} from '../helpers';
//components
import {ThemeContext, UIContext} from '../context';
import {useAppSelector} from '../redux/hooks';
import {ModalNav} from './ModalNav';
import {ModalNotification} from './ModalNotification';
import {useModalNotifications} from './hooks';
import {authSelectors} from '../redux/selectors/authSelectors';
import {notificationsSelectors} from '../redux/selectors/notificationsSelectors';

export function MainHeader() {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {
    isOpenModalNav,
    isOpenModalNotifications,
    changeStateModalNav,
    changeStateModalNotifications,
  } = useContext(UIContext);
  const {selectUser} = authSelectors();
  const {selectCounterNotifications} = notificationsSelectors();
  const user = useAppSelector(selectUser());
  const counterNotifications = useAppSelector(selectCounterNotifications());
  const {top} = useSafeAreaInsets();
  //styles
  const {containerHeader, wrapperHeader, wrapperModalIcons, badgeStyle} =
    headerStyles({
      colors,
      top,
    });
  //logic
  const {
    //state
    //methods
    //functions
    getServicesNotifications,
  } = useModalNotifications();

  useEffect(() => {
    getServicesNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={containerHeader}>
      <SafeAreaView style={wrapperHeader}>
        <Avatar.Text
          size={widthFullScreen * 0.11}
          label={user?.user?.charAt(0).toUpperCase()!}
          style={{backgroundColor: colors.primary}}
          color={colors.white}
        />
        <View style={wrapperModalIcons}>
          <View style={{marginRight: 10}}>
            <Badge style={badgeStyle}>{counterNotifications}</Badge>
            <EvilIcons
              onPress={changeStateModalNotifications}
              name="bell"
              size={heightFullScreen / 19}
              color={colors.textSecondary}
            />
          </View>
          <EvilIcons
            onPress={changeStateModalNav}
            name="navicon"
            size={heightFullScreen / 19}
            color={colors.textSecondary}
          />
        </View>
      </SafeAreaView>
      {isOpenModalNav && <ModalNav />}
      {isOpenModalNotifications && <ModalNotification />}
    </View>
  );
}
