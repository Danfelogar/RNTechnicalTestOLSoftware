//components
import {createReducer} from '../../helpers/createReducer';
import {handlerAuth} from './_handler';
import {initialStateAuth} from './_initialState';

export const authReducer = createReducer(initialStateAuth, handlerAuth);
