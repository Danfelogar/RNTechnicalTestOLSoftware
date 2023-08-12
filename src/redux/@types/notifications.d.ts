//types
import {INotifications, ITodos} from '../../components';

export interface INotificationState {
  counterNotifications: number;
  notificationsArr: INotifications[];
  todosArr: ITodos[];
}
