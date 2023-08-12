//dependencies
import React, {useContext} from 'react';
import {View} from 'react-native';
//types
import {ITodos} from './types';
//styles
import {CardTodosStyles} from './styledComponent';
//components
import {ThemeContext} from '../context';
import {CustomText} from './custom';

export default function CardTodos({todo}: {todo: ITodos}) {
  //globalContext
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //style
  const {containerCard, circleFinish, circlePending} = CardTodosStyles();
  return (
    <View style={containerCard}>
      <View
        style={
          todo.check
            ? {
                ...circleFinish,
                backgroundColor: colors.primary,
                borderColor: colors.primary,
              }
            : {
                ...circlePending,
                backgroundColor: colors.background,
                borderColor: colors.primary,
              }
        }
      />
      <CustomText
        fontSize={17}
        fontWeight={'600'}
        marginBottom={0}
        color={colors.textPrimary}>
        {todo.description}
      </CustomText>
    </View>
  );
}
