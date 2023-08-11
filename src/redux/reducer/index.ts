//dependencies
import {combineReducers} from 'redux';
//component
import authReducer from './auth.reducer';

export default combineReducers({
  auth: authReducer,
});
