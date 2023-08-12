//types
//types
import {INotifications, ITodos} from '../../components';

export const NOTIFICATIONS_ADD_NOTIFICATIONS =
  'notificationsActions/NOTIFICATIONS_ADD_NOTIFICATIONS';

export interface INotificationsAddNotification {
  type: typeof NOTIFICATIONS_ADD_NOTIFICATIONS;
  payload: {
    counterNotifications: number;
    notificationsArr: INotifications[];
    todosArr: ITodos[];
  };
}
