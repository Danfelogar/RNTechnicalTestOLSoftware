import {ILoginCredentials} from '../types';

//types
export interface PropsLoginForm {
  isLoading: boolean;
  isPasswordSecret: boolean;
  changePasswordSecret: () => void;
  validateCredentialsLogin(data: ILoginCredentials): void;
}

export interface IStylesLoginFormStyle {
  backgroundColor: string;
}
