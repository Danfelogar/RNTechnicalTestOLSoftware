//dependencies
import React, {useContext} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
//contexts
import {ThemeContext} from '../../context';
//styles
import {loginStyles} from './stylesLogin';
//components
import {CustomText, SnackbarError} from '../../components';
//hooks
import {useLogin} from './useLogin';
import {FormProvider} from 'react-hook-form';
import {LoginForm} from './components/LoginForm';

export function Login() {
  //global context
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);
  //customStyles
  const {
    containerLogin,
    logoImage,
    loginWrapper,
    mainTitleLogin,
    zoneInputWrapper,
    contentForRecover,
  } = loginStyles({colors});
  //customLogic
  const {
    //states
    isPasswordSecret,
    isLoading,
    textError,
    isSnackbarError,
    //methods
    formMethods,
    setIsSnackbarError,
    //functions
    changePasswordSecret,
    validateCredentialsLogin,
  } = useLogin();

  return (
    <View style={containerLogin}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.background}
          showHideTransition="slide"
          barStyle={dark ? 'light-content' : 'dark-content'}
        />
        <View style={loginWrapper}>
          <Image
            style={logoImage}
            source={require('../../public/OL-Software-logo.png')}
          />
          <View style={mainTitleLogin}>
            <CustomText
              fontSize={28}
              fontWeight={'bold'}
              marginBottom={11}
              color={colors.textPrimary}>
              Inicia sesión para&nbsp;
            </CustomText>
            <CustomText
              fontSize={28}
              fontWeight={'bold'}
              marginBottom={11}
              color={colors.primary}>
              gestionar
            </CustomText>
          </View>
          <CustomText
            fontSize={16}
            fontWeight={'bold'}
            marginBottom={0}
            color={colors.textSecondary}>
            Hola! Bienvenido a OLSoftware
          </CustomText>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={zoneInputWrapper}>
            <KeyboardAvoidingView
              style={{alignItems: 'center'}}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <FormProvider {...formMethods}>
                <LoginForm
                  isLoading={isLoading}
                  isPasswordSecret={isPasswordSecret}
                  changePasswordSecret={changePasswordSecret}
                  validateCredentialsLogin={validateCredentialsLogin}
                />
              </FormProvider>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
        <View style={contentForRecover}>
          <CustomText
            fontSize={16}
            fontWeight={'bold'}
            marginBottom={0}
            color={colors.textPrimary}>
            ¿Olvidaste tu contraseña o nombre de usuario?
          </CustomText>
        </View>
        <SnackbarError
          setIsSnackbarError={setIsSnackbarError}
          isOpen={isSnackbarError}
          styled={{
            botton: 0,
            paddingHorizontal: Platform.OS === 'ios' ? 0 : 10,
          }}
          msmText={textError ? textError : 'Unexpected error please try again'}
        />
      </SafeAreaView>
    </View>
  );
}
