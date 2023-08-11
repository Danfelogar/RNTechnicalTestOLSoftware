//dependencies
import {useDispatch} from 'react-redux';
//types
import {TAppDispatch} from '../@types';

const useAppDispatch: () => TAppDispatch = useDispatch;

export default useAppDispatch;
