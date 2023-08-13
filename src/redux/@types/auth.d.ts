import {IUserLogin} from '../../screens';

export interface IAuthState {
  user: IUserLogin | null;
  isAuth: 'pending' | 'valid' | 'denied';
  userJWT: string | null;
  rol: 'Admin' | 'Dev' | 'Pending';
}
