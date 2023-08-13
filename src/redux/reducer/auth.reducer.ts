//types
import {IAuthState} from '../@types/auth';
import {IUserLogin} from '../../screens';
// component
import * as actionsTypeAuth from '../actions-types';

export const INITIAL_STATE_AUTH: IAuthState = {
  user: null,
  isAuth: 'pending',
  userJWT: null,
  rol: 'Pending',
};
type authActionType =
  | {
      type: typeof actionsTypeAuth.AUTH_USER_ADD_CREDENTIAL;
      payload: {user: IUserLogin; userJWT: string};
    }
  | {
      type: typeof actionsTypeAuth.AUTH_USER_ADD_ROL;
      payload: 'Admin' | 'Dev' | 'Pending';
    }
  | {
      type: typeof actionsTypeAuth.AUTH_USER_REVALIDATED_CREDENTIAL;
      payload: {user: IUserLogin; userJWT: string};
    }
  | {type: typeof actionsTypeAuth.AUTH_USER_CLEAR_CREDENTIAL};

export default function authReducer(
  state: IAuthState = INITIAL_STATE_AUTH,
  action: authActionType,
): IAuthState {
  switch (action.type) {
    case actionsTypeAuth.AUTH_USER_ADD_CREDENTIAL:
    case actionsTypeAuth.AUTH_USER_REVALIDATED_CREDENTIAL:
      return {
        ...state,
        isAuth: 'valid',
        user: action.payload.user,
        userJWT: action.payload.userJWT,
      };
    case actionsTypeAuth.AUTH_USER_ADD_ROL:
      return {
        ...state,
        rol: action.payload,
      };
    case actionsTypeAuth.AUTH_USER_CLEAR_CREDENTIAL:
      return {
        ...INITIAL_STATE_AUTH,
        isAuth: 'denied',
      };
    default:
      return {
        ...state,
      };
  }
}
