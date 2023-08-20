//components

import {createSelector} from '../helpers/createSelector';
import {IReduxStore} from '../store';

export function authSelectors() {
  return {
    selectUser() {
      return createSelector(
        (state: IReduxStore) => state.auth,
        auth => auth.user,
      );
    },
    selectIsAuth() {
      return createSelector(
        (state: IReduxStore) => state.auth,
        auth => auth.isAuth,
      );
    },
    selectUserJWT() {
      return createSelector(
        (state: IReduxStore) => state.auth,
        auth => auth.userJWT,
      );
    },
    selectUserRol() {
      return createSelector(
        (state: IReduxStore) => state.auth,
        auth => auth.rol,
      );
    },
  };
}
