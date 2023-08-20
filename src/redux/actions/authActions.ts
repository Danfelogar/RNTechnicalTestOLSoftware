//types
import {IUserLogin} from '../../screens';
import {typesAuth} from '../reducer/auth/_types';

export function authActionsSelectors() {
  return {
    addAuthUserCredential(user: IUserLogin) {
      return {
        type: typesAuth.AUTH_USER_ADD_CREDENTIAL,
        payload: user,
      };
    },
    revalidateUser(userJWT: string) {
      return {
        type: typesAuth.AUTH_USER_REVALIDATED_CREDENTIAL,
        payload: userJWT,
      };
    },
    addRolUser(val: 'Admin' | 'Dev' | 'Pending') {
      return {
        type: typesAuth.AUTH_USER_ADD_ROL,
        payload: val,
      };
    },
    clearUserCredentials() {
      return {type: typesAuth.AUTH_USER_CLEAR_CREDENTIAL};
    },
  };
}
