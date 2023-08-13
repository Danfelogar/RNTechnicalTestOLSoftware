//types
import {IUserLogin} from '../../screens';

export const AUTH_USER_ADD_CREDENTIAL = 'authActions/AUTH_USER_ADD_CREDENTIAL';

export interface IAuthUserAddCredential {
  type: typeof AUTH_USER_ADD_CREDENTIAL;
  payload: {
    user: IUserLogin;
    userJWT: string;
    // isAuth: 'valid';
  };
}

export const AUTH_USER_REVALIDATED_CREDENTIAL =
  'authActions/AUTH_USER_REVALIDATED_CREDENTIAL';

export interface IAuthUserRevalidatedCredential {
  type: typeof AUTH_USER_REVALIDATED_CREDENTIAL;
  payload: {
    user: IUserLogin;
    userJWT: string;
    // isAuth: 'valid';
  };
}
export const AUTH_USER_ADD_ROL = 'authActions/AUTH_USER_ADD_ROL';

export interface IAuthUserAddRol {
  type: typeof AUTH_USER_ADD_ROL;
  payload: 'Admin' | 'Dev' | 'Pending';
}

export const AUTH_USER_CLEAR_CREDENTIAL =
  'authActions/AUTH_USER_CLEAR_CREDENTIAL';

export interface IAuthUserClearCredential {
  type: typeof AUTH_USER_CLEAR_CREDENTIAL;
  //   payload: {
  //     user: null;
  //     userJWT: null;
  //     isAuth: 'denied';
  //   };
}
