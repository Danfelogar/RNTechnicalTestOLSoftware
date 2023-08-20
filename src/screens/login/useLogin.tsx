//dependencies
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

//helpers
import {validateLogin} from '../../helpers';
//types
import {ILoginCredentials} from './types';
//components
import {dummyServices} from '../../services';
import {useAppDispatch} from '../../redux/hooks';
import {authActionsSelectors} from '../../redux/actions';

export function useLogin() {
  //global context
  const dispatch = useAppDispatch();
  const {addAuthUserCredential} = authActionsSelectors();
  const navigation = useNavigation<any>();
  //state
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isSnackbarError, setIsSnackbarError] = useState(false);
  const [textError, setTextError] = useState<string | undefined>(undefined);

  //credentials validations with react hook form and yup
  const formMethods = useForm<ILoginCredentials>({
    resolver: yupResolver(validateLogin),
  });
  // change state of password
  function changePasswordSecret() {
    setIsPasswordSecret(!isPasswordSecret);
  }
  //call error snackbar
  function toggleSnackBarError() {
    setIsSnackbarError(!isSnackbarError);
  }
  //login service
  async function validateCredentialsLogin(data: ILoginCredentials) {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    return await dummyServices
      .get('/login', {
        params: {...data},
      })
      .then(res => {
        if (!res.data.data[0]) {
          setTextError('Credenciales invalidas intente de nuevo.');
          return toggleSnackBarError();
        } else {
          dispatch(addAuthUserCredential(res.data.data[0]));
          return getDashboard();
        }
      })
      .catch(err => {
        //console.log({err});
        setTextError(JSON.stringify(err));
        return toggleSnackBarError();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  //navigate redirection
  function getDashboard() {
    navigation.navigate('PrivateNavigation');
  }
  return {
    //states
    isPasswordSecret,
    isLoading,
    textError,
    isSnackbarError,
    //methods
    formMethods,
    setIsSnackbarError,
    //functions
    changePasswordSecret,
    validateCredentialsLogin,
    getDashboard,
    toggleSnackBarError,
  };
}
