//dependencies
import * as yup from 'yup';

export const validateCreateProject = yup.object().shape({
  projectName: yup
    .string()
    .min(3, 'El nombre del proyecto debe de tener mas de 2 caracteres')
    .required('Campo Requerido.')
    .typeError('Campo Requerido.'),
  repoUrl: yup
    .string()
    .min(3, 'La url del repo debe de tener mas de 2 caracteres')
    .required('Campo Requerido.')
    .typeError('Campo Requerido.'),
  client: yup
    .string()
    .min(3, 'El cliente del proyecto debe de tener mas de 2 caracteres')
    .required('Campo Requerido.')
    .typeError('Campo Requerido.'),
  developers: yup
    .string()
    .min(1, 'Debes de seleccionar por lo penes un desarrollador')
    .required('Campo Requerido.')
    .typeError('Campo Requerido.'),
  ci: yup
    .boolean()
    .nullable()
    .default(null)
    .required('Campo Requerido.')
    .typeError('Campo Requerido.'),
  cd: yup
    .boolean()
    .nullable()
    .default(null)
    .required('Campo Requerido.')
    .typeError('Campo Requerido.'),
  frontendTecnology: yup
    .string()
    .min(1, 'Debes de seleccionar por lo penes una tecnología de front.')
    .required('Campo Requerido.')
    .typeError('Campo Requerido.'),
  backendTecnology: yup
    .string()
    .min(1, 'Debes de seleccionar por lo penes una tecnología de back.')
    .required('Campo Requerido.')
    .typeError('Campo Requerido.'),
  databases: yup
    .string()
    .min(
      1,
      'Debes de seleccionar por lo penes una tecnología de base de datos.',
    )
    .required('Campo Requerido.')
    .typeError('Campo Requerido.'),
  errorsCount: yup.number().nullable().default(null),
  warningCount: yup.number().nullable().default(null),
  deployCount: yup.number().nullable().default(null),
  percentageCompletion: yup.number().nullable().default(null),
  reportNc: yup.number().nullable().default(null),
  status: yup.string().nullable().default(null),
});
