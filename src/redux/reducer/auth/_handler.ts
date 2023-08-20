//dependencies

//types
import {PayloadAction} from '@reduxjs/toolkit';
import {IUserLogin} from '../../../screens';
import {IAuthState} from './_interfaces';
import {typesAuth} from './_types';
//helper
import {base64ToObject, objectToBase64} from '../../../helpers';
import {initialStateAuth} from './_initialState';

export const handlerAuth = {
  [typesAuth.AUTH_USER_ADD_CREDENTIAL]: (
    state: IAuthState,
    action: PayloadAction<IUserLogin>,
  ) => {
    const user = action.payload;
    const userJWT = objectToBase64(user);
    return {
      ...state,
      isAuth: 'valid',
      user,
      userJWT,
    };
  },
  [typesAuth.AUTH_USER_REVALIDATED_CREDENTIAL]: (
    state: IAuthState,
    action: PayloadAction<string>,
  ) => {
    const userJWT = action.payload;
    const user = base64ToObject(userJWT);
    return {
      ...state,
      isAuth: 'valid',
      user,
      userJWT,
    };
  },
  [typesAuth.AUTH_USER_ADD_ROL]: (
    state: IAuthState,
    action: PayloadAction<'Admin' | 'Dev' | 'Pending'>,
  ) => {
    const rol = action.payload;
    return {
      ...state,
      rol,
    };
  },
  [typesAuth.AUTH_USER_CLEAR_CREDENTIAL]: () => {
    return {
      ...initialStateAuth,
      isAuth: 'denied',
    };
  },
};
