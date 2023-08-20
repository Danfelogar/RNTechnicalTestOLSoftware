//types
import {INotificationsState} from '../reducer/notifications/_interfaces';
import {typesNotifications} from '../reducer/notifications/_types';

export function notificationsActions() {
  return {
    addNotification({
      counterNotifications,
      notificationsArr,
      todosArr,
    }: INotificationsState) {
      return {
        type: typesNotifications.NOTIFICATIONS_ADD_NOTIFICATIONS,
        payload: {
          counterNotifications,
          notificationsArr,
          todosArr,
        },
      };
    },
  };
}
