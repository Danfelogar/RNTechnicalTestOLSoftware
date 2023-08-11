//types
import {IUserLogin} from '../../screens';
import * as actionsTypeAuth from '../actions-types';
//helpers
import {base64ToObject, objectToBase64} from '../../helpers';

export function addAuthUserCredential(
  user: IUserLogin,
): actionsTypeAuth.IAuthUserAddCredential {
  const userJWT = objectToBase64(user);
  return {
    type: actionsTypeAuth.AUTH_USER_ADD_CREDENTIAL,
    payload: {
      user,
      userJWT,
    },
  };
}

export function revalidateUser(
  userJWT: string,
): actionsTypeAuth.IAuthUserRevalidatedCredential {
  const user = base64ToObject(userJWT);
  return {
    type: actionsTypeAuth.AUTH_USER_REVALIDATED_CREDENTIAL,
    payload: {
      user,
      userJWT,
    },
  };
}

export function clearUserCredentials(): actionsTypeAuth.IAuthUserClearCredential {
  return {type: actionsTypeAuth.AUTH_USER_CLEAR_CREDENTIAL};
}
