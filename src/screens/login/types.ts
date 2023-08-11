import {IColorsProps} from '../../context';

export interface IStylesLogin extends Pick<IColorsProps, 'colors'> {}

export interface IUserLogin {
  id: number;
  userId: number;
  user: string;
  password: string;
}

export interface ILoginCredentials {
  user: string;
  password: string;
}
