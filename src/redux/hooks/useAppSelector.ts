//dependencies
import type {TypedUseSelectorHook} from 'react-redux';

import {useSelector} from 'react-redux';
//types
import {TRootState} from '../@types';

const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default useAppSelector;
