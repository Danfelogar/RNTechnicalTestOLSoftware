//dependencies
import React, {PureComponent} from 'react';
import {View} from 'react-native';
//types
import {ICardNotifications} from './types';
//styles
import {CardNotificationsStyles} from './styledComponent';
//helpers
import {formattedDate} from '../helpers';
//components
import {CustomText} from './custom';

export class CardNotifications extends PureComponent<ICardNotifications> {
  render() {
    const {notification, colors} = this.props;
    //style
    const {containerCard, containerHeader} = CardNotificationsStyles();
    //logic
    const colorAlert =
      notification.type === 'error'
        ? colors.red
        : notification.type === 'warning'
        ? colors.orange
        : colors.secondary;
    return (
      <View
        style={{
          ...containerCard,
          backgroundColor: colors.card,
          borderColor: colorAlert,
        }}>
        <View style={containerHeader}>
          <CustomText
            fontSize={17}
            fontWeight={'bold'}
            marginBottom={13}
            color={colorAlert}>
            {notification.type}
          </CustomText>
          <CustomText
            fontSize={17}
            fontWeight={'600'}
            marginBottom={13}
            color={colors.textPrimary}>
            {formattedDate(notification.time)}
          </CustomText>
        </View>
        <View style={{width: '100%'}}>
          <CustomText
            fontSize={17}
            fontWeight={'500'}
            marginBottom={13}
            color={colors.textSecondary}>
            {notification.details}
          </CustomText>
        </View>
      </View>
    );
  }
}
