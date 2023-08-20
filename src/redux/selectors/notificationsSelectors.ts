//components

import {createSelector} from '../helpers/createSelector';
import {IReduxStore} from '../store';

export function notificationsSelectors() {
  return {
    selectCounterNotifications() {
      return createSelector(
        (state: IReduxStore) => state.notifications,
        notificaions => notificaions.counterNotifications,
      );
    },
    selectNotificationsArr() {
      return createSelector(
        (state: IReduxStore) => state.notifications,
        notificaions => notificaions.notificationsArr,
      );
    },
    selectTodosArr() {
      return createSelector(
        (state: IReduxStore) => state.notifications,
        notificaions => notificaions.todosArr,
      );
    },
  };
}
