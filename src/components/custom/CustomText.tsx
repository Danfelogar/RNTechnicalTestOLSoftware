//dependencies
import React from 'react';
import {Text} from 'react-native';
//types
import {IComponentCustomText} from './types';
//styles
import {customTextStyles} from './stylesCustom';

export function CustomText({
  fontSize,
  marginBottom,
  fontWeight,
  children,
  color,
  textAlign = 'left',
}: IComponentCustomText) {
  //customStyles
  const {styleCustomText} = customTextStyles({
    fontSize,
    marginBottom,
    fontWeight,
    color,
    textAlign,
  });
  return <Text style={styleCustomText}>{children}</Text>;
}
