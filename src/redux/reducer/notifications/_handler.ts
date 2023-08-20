//dependencies
import {PayloadAction} from '@reduxjs/toolkit';
//types
import {INotificationsState} from './_interfaces';
import {typesNotifications} from './_types';
import {INotifications, ITodos} from '../../../components';
//helpers

export const handlerNotifications = {
  [typesNotifications.NOTIFICATIONS_ADD_NOTIFICATIONS]: (
    state: INotificationsState,
    action: PayloadAction<{
      counterNotifications: number;
      notificationsArr: INotifications[];
      todosArr: ITodos[];
    }>,
  ) => {
    const counterNotifications = action.payload.counterNotifications;
    const notificationsArr = action.payload.notificationsArr;
    const todosArr = action.payload.todosArr;
    return {
      ...state,
      counterNotifications,
      notificationsArr,
      todosArr,
    };
  },
};
