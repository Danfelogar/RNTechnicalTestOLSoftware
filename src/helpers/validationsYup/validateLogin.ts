import * as yup from 'yup';

export const validateLogin = yup.object().shape({
  user: yup
    .string()
    .min(3, 'El usuario debe de tener mas de 2 caracteres')
    .required('Campo Requerido.'),
  password: yup
    .string()
    .min(5, 'La contraseña tiene que tener mas de 4 caracteres ')
    .required('Campo Requerido.'),
});
