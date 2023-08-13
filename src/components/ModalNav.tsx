//dependencies
import React, {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//styles
import {modalNavStyles} from './styledComponent';
//helpers
import {heightFullScreen, widthFullScreen} from '../helpers';
//components
import {ThemeContext, UIContext} from '../context';
import {useModalNav} from './hooks';
import {CustomText} from './custom';
import {useAppDispatch} from '../redux/hooks';
import {clearUserCredentials} from '../redux/actions/auth.actions';

export function ModalNav() {
  //globalContext
  const dispatch = useAppDispatch();
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);
  const {isOpenModalNav, changeStateModalNav} = useContext(UIContext);
  const {top, bottom} = useSafeAreaInsets();
  //styles
  const {containerModal, modalContent, contentListItems} = modalNavStyles({
    colors,
    top,
  });
  //logic
  const {
    //state
    navList,
    name,
    //methods
    //functions
    getRedirection,
  } = useModalNav();
  return (
    <SafeAreaView style={{backgroundColor: colors.secondary}}>
      <StatusBar
        backgroundColor={colors.secondary}
        showHideTransition={'slide'}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Modal
        visible={isOpenModalNav}
        transparent
        onRequestClose={changeStateModalNav}
        animationType="fade">
        <View style={containerModal}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={changeStateModalNav}
            style={{
              width: widthFullScreen * 0.44,
              height: '100%',
            }}
          />
          <View style={modalContent}>
            {navList.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => getRedirection(item.nav)}
                activeOpacity={0.94}
                style={contentListItems}>
                {item.icon}
                <View style={{marginRight: 14}} />
                <CustomText
                  fontSize={18}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={
                    name === item.nav ? colors.primary : colors.textDisabled
                  }>
                  {item.name}
                </CustomText>
              </TouchableOpacity>
            ))}
            <View style={{flex: 1}} />
            <TouchableOpacity
              onPress={() => {
                changeStateModalNav();
                dispatch(clearUserCredentials());
              }}
              activeOpacity={0.94}
              style={{...contentListItems, marginBottom: bottom}}>
              <AntDesign
                name="logout"
                size={heightFullScreen / 27}
                color={colors.red}
              />
              <View style={{marginRight: 14}} />
              <CustomText
                fontSize={18}
                fontWeight={'500'}
                marginBottom={0}
                color={colors.red}>
                Cerrar sesión
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
