//types
import {TRootState} from '../@types';

export const selectUser = () => (state: TRootState) => state.auth.user;

export const selectIsAuth = () => (state: TRootState) => state.auth.isAuth;

export const selectUserJWT = () => (state: TRootState) => state.auth.userJWT;
