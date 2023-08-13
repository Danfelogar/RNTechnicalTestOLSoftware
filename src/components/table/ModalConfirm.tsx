//dependencies
import React, {useContext} from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
//styles
import {modalConfirmStyles} from './stylesTable';
//helpers
// import {heightFullScreen, widthFullScreen} from '../helpers';
//components
import {ThemeContext, UIContext} from '../../context';
import {Button, CustomText} from '../custom';

export function ModalConfirm({
  id,
  serviceDelete,
  isLoading,
}: {
  id: number;
  isLoading: boolean;
  serviceDelete: () => Promise<void>;
}) {
  // globalContext
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);
  const {isOpenModalWarningForDelete, changeStateModalWarningForDelete} =
    useContext(UIContext);
  //styles
  const {containerModal, modalContent, btnStyle, backBtn} = modalConfirmStyles({
    colors,
  });
  return (
    <SafeAreaView style={{backgroundColor: colors.secondary}}>
      <StatusBar
        backgroundColor={colors.secondary}
        showHideTransition={'slide'}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Modal
        visible={isOpenModalWarningForDelete}
        transparent
        onRequestClose={changeStateModalWarningForDelete}
        animationType="fade">
        <View style={containerModal}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={changeStateModalWarningForDelete}
            style={backBtn}
          />
          <View style={modalContent}>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <CustomText
                fontSize={20}
                fontWeight={'bold'}
                marginBottom={20}
                color={colors.textPrimary}>
                Confirmación para borrar
              </CustomText>
            </View>
            <CustomText
              fontSize={17}
              fontWeight={'400'}
              marginBottom={0}
              color={colors.textSecondary}>
              {` Estas por borrar el item con ${id} de la lista si estas seguro de lo
              que haces dale en "Borrar" de lo contrario dale en "Regresar".`}
            </CustomText>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Button
                buttonStyle={{...btnStyle, backgroundColor: colors.primary}}
                activeOpacity={0.9}
                isLoading={isLoading}
                onPress={changeStateModalWarningForDelete}
                textContent={
                  <CustomText
                    fontSize={22}
                    fontWeight={'bold'}
                    marginBottom={0}
                    color={colors.white}>
                    Regresar
                  </CustomText>
                }
              />
              <Button
                buttonStyle={btnStyle}
                activeOpacity={0.9}
                isLoading={isLoading}
                onPress={serviceDelete}
                textContent={
                  <CustomText
                    fontSize={22}
                    fontWeight={'bold'}
                    marginBottom={0}
                    color={colors.white}>
                    Borrar
                  </CustomText>
                }
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
