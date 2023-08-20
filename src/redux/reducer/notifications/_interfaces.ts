//types
import {INotifications, ITodos} from '../../../components';

export interface INotificationsState {
  counterNotifications: number;
  notificationsArr: INotifications[];
  todosArr: ITodos[];
}
