//types
import {INotificationState} from '../@types/notifications';
import * as actionsTypeNotifications from '../actions-types';

export function addNotification({
  counterNotifications,
  notificationsArr,
  todosArr,
}: INotificationState): actionsTypeNotifications.INotificationsAddNotification {
  return {
    type: actionsTypeNotifications.NOTIFICATIONS_ADD_NOTIFICATIONS,
    payload: {
      counterNotifications,
      notificationsArr,
      todosArr,
    },
  };
}
