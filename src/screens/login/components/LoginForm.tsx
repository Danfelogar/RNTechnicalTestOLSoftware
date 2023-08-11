//dependencies
import React, {useContext} from 'react';
import {View} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {useFormContext} from 'react-hook-form';
//styles
import {loginFormStyles} from './styleComponents';
//types
import {PropsLoginForm} from './types';
import {ILoginCredentials} from '../types';
//helpers
import {heightFullScreen} from '../../../helpers';
//components
import {Button, CustomText, InputGeneric} from '../../../components';
import {ThemeContext} from '../../../context';

export function LoginForm({
  isLoading,
  isPasswordSecret,
  changePasswordSecret,
  validateCredentialsLogin,
}: PropsLoginForm): JSX.Element {
  //global context
  const {
    theme: {
      colors: {textPrimary, textSecondary, background},
    },
  } = useContext(ThemeContext);
  //controller
  const {control, handleSubmit: onSubmit} = useFormContext<ILoginCredentials>();
  //customStyles
  const {contentInput, contentBts, btnLoginStyle} = loginFormStyles({
    backgroundColor: textPrimary,
  });

  return (
    <>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'user'}
          borderColor={textSecondary}
          firstIcon={
            <IconFeather
              name="user"
              size={heightFullScreen / 34}
              color={textSecondary}
            />
          }
          placeholder="User"
          keyboardType="default"
          placeholderTextColor={textSecondary}
          inputColor={textPrimary}
          autoCorrect
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'password'}
          borderColor={textSecondary}
          lastIcon={
            <IconIonicons
              onPress={changePasswordSecret}
              name={isPasswordSecret ? 'eye' : 'eye-off'}
              size={heightFullScreen / 34}
              color={textSecondary}
            />
          }
          placeholder="Password"
          isSecretText={isPasswordSecret}
          placeholderTextColor={textSecondary}
          inputColor={textPrimary}
          autoCorrect
        />
      </View>
      <View style={contentBts}>
        <Button
          isLoading={isLoading}
          buttonStyle={btnLoginStyle}
          activeOpacity={0.9}
          onPress={onSubmit(validateCredentialsLogin)}
          textContent={
            <CustomText
              fontSize={22}
              fontWeight={'bold'}
              marginBottom={0}
              color={background}>
              Login
            </CustomText>
          }
        />
      </View>
    </>
  );
}
