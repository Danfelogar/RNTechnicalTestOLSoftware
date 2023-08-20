import {IAuthState} from './_interfaces';

export const initialStateAuth: IAuthState = {
  user: null,
  isAuth: 'pending',
  userJWT: null,
  rol: 'Pending',
};
