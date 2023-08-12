//types
import {INotifications, ITodos} from '../../components';
import {INotificationState} from '../@types/notifications';
//components
import * as actionsTypeNotifications from '../actions-types';

export const INITIAL_STATE_NOTIFICATIONS: INotificationState = {
  counterNotifications: 0,
  notificationsArr: [],
  todosArr: [],
};

type notificationActionType = {
  type: typeof actionsTypeNotifications.NOTIFICATIONS_ADD_NOTIFICATIONS;
  payload: {
    counterNotifications: number;
    notificationsArr: INotifications[];
    todosArr: ITodos[];
  };
};

export default function notificationsReducer(
  state: INotificationState = INITIAL_STATE_NOTIFICATIONS,
  action: notificationActionType,
): INotificationState {
  switch (action.type) {
    case actionsTypeNotifications.NOTIFICATIONS_ADD_NOTIFICATIONS:
      return {
        ...state,
        counterNotifications: action.payload.counterNotifications,
        notificationsArr: action.payload.notificationsArr,
        todosArr: action.payload.todosArr,
      };

    default:
      return {
        ...state,
      };
  }
}
