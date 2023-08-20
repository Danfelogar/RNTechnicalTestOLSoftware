//components
import {createReducer} from '../../helpers/createReducer';
import {handlerNotifications} from './_handler';
import {initialStateNotifications} from './_initialState';

export const notificationsReducer = createReducer(
  initialStateNotifications,
  handlerNotifications,
);
