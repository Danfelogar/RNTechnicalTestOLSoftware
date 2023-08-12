//dependencies
import {combineReducers} from 'redux';
//component
import authReducer from './auth.reducer';
import notificationsReducer from './notifications.reducer';

export default combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
});
