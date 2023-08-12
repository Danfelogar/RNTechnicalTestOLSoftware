//dependencies
import React, {useContext, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {ThemeContext, UIContext} from '../context';
//styles
import {modalNotificationsStyles} from './styledComponent';
//helpers
import {heightFullScreen, widthFullScreen} from '../helpers';
//components
import {CustomText} from './custom';
import {useModalNotifications} from './hooks';
import {useAppSelector} from '../redux/hooks';
import {
  selectNotificationsArr,
  selectTodosArr,
} from '../redux/selectors/notifications.selector';
import {CardNotifications} from './CardNotifications';
import CardTodos from './CardTodos';

export function ModalNotification() {
  //globalContext
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const notificationsArr = useAppSelector(selectNotificationsArr());
  const todosArr = useAppSelector(selectTodosArr());
  const {isOpenModalNotifications, changeStateModalNotifications} =
    useContext(UIContext);
  //styles
  const {containerModal, modalContent, titleHeader} = modalNotificationsStyles({
    colors,
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
    <SafeAreaView style={{backgroundColor: colors.secondary}}>
      <StatusBar
        backgroundColor={colors.secondary}
        showHideTransition={'slide'}
        barStyle="default"
      />
      <Modal
        visible={isOpenModalNotifications}
        transparent
        onRequestClose={changeStateModalNotifications}
        animationType="slide">
        <View style={containerModal}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={changeStateModalNotifications}
            style={{
              width: widthFullScreen,
              height: '30%',
            }}
          />
          <View style={modalContent}>
            <View style={titleHeader}>
              <CustomText
                fontSize={28}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Notificaciones
              </CustomText>
              <Feather
                onPress={changeStateModalNotifications}
                name="x"
                size={heightFullScreen / 27}
                color={colors.textPrimary}
              />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <CustomText
                fontSize={17}
                fontWeight={'bold'}
                marginBottom={13}
                color={colors.textSecondary}>
                Sección de notificaciones
              </CustomText>
              {notificationsArr.map((item, idx) => (
                <CardNotifications key={idx} notification={item} />
              ))}
              <CustomText
                fontSize={17}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textSecondary}>
                Sección de quehaceres
              </CustomText>
              {todosArr.map((item, idx) => (
                <CardTodos key={idx} todo={item} />
              ))}
            </ScrollView>
            {/* <FlatList
              data={notificationsArr}
              keyExtractor={() => Math.floor(Math.random() * 10000).toString()}
              ListHeaderComponent={
                <CustomText
                  fontSize={17}
                  fontWeight={'bold'}
                  marginBottom={13}
                  color={colors.textSecondary}>
                  Sección de notificaciones
                </CustomText>
              }
              renderItem={({item}) => <CardNotifications notification={item} />}
            />
            <FlatList
              data={todosArr}
              keyExtractor={() => Math.floor(Math.random() * 10000).toString()}
              ListHeaderComponent={
                <CustomText
                  fontSize={17}
                  fontWeight={'bold'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  Sección de quehaceres
                </CustomText>
              }
              renderItem={({item}) => <CardTodos todo={item} />}
            /> */}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
