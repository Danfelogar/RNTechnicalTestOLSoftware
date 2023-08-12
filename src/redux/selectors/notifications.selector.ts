//types
import {TRootState} from '../@types';

export const selectCounterNotifications = () => (state: TRootState) =>
  state.notifications.counterNotifications;

export const selectNotificationsArr = () => (state: TRootState) =>
  state.notifications.notificationsArr;

export const selectTodosArr = () => (state: TRootState) =>
  state.notifications.todosArr;
