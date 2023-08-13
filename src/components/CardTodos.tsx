//dependencies
import React, {PureComponent} from 'react';
import {View} from 'react-native';
//types
import {ICardTodos} from './types';
//styles
import {CardTodosStyles} from './styledComponent';
//components
import {CustomText} from './custom';

export class CardTodos extends PureComponent<ICardTodos> {
  render() {
    const {colors, todo} = this.props;
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
}
