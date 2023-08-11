//dependencies
import {decode as atob, encode as btoa} from 'base-64';
//types
import {IUserLogin} from '../screens';

// Function to convert a Base64 back to an object
export function base64ToObject(base64: string): IUserLogin {
  const json = atob(base64);
  const obj = JSON.parse(json) as IUserLogin;
  return obj;
}

// Function to convert an object to Base64
export function objectToBase64(user: IUserLogin): string {
  const json = JSON.stringify(user);
  const base64 = btoa(json);
  return base64;
}
