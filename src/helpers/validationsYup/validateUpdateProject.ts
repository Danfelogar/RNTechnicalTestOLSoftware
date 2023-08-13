//dependencies
import * as yup from 'yup';

export const validateUpdateProject = yup.object().shape({
  projectName: yup
    .string()
    .min(3, 'El nombre del proyecto debe de tener mas de 2 caracteres')
    .typeError('Campo Requerido.'),
  repoUrl: yup
    .string()
    .min(3, 'La url del repo debe de tener mas de 2 caracteres')
    .typeError('Campo Requerido.'),
  client: yup
    .string()
    .min(3, 'El cliente del proyecto debe de tener mas de 2 caracteres')
    .typeError('Campo Requerido.'),
  developers: yup
    .string()
    .min(1, 'Debes de seleccionar por lo penes un desarrollador')
    .typeError('Campo Requerido.'),
  ci: yup.boolean().typeError('Campo Requerido.'),
  cd: yup.boolean().typeError('Campo Requerido.'),
  frontendTecnology: yup
    .string()
    .min(1, 'Debes de seleccionar por lo penes una tecnología de front.')
    .typeError('Campo Requerido.'),
  backendTecnology: yup
    .string()
    .min(1, 'Debes de seleccionar por lo penes una tecnología de back.')
    .typeError('Campo Requerido.'),
  databases: yup
    .string()
    .min(
      1,
      'Debes de seleccionar por lo penes una tecnología de base de datos.',
    )
    .typeError('Campo Requerido.'),
  errorsCount: yup.number().typeError('Campo Requerido.'),
  warningCount: yup.number().typeError('Campo Requerido.'),
  deployCount: yup.number().typeError('Campo Requerido.'),
  percentageCompletion: yup.number().typeError('Campo Requerido.'),
  reportNc: yup.number().nullable().typeError('Campo Requerido.'),
  status: yup.string().nullable().typeError('Campo Requerido.'),
});
