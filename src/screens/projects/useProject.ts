//dependencies
import {useEffect, useState} from 'react';
//types
import {IProject} from './types';
import {dummyServices} from '../../services';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
//helpers
import {validateCreateProject, validateUpdateProject} from '../../helpers';

export function useProject({id}: {id: number | 'undefined'}) {
  //states
  const [projectData, setProjectData] = useState<IProject>();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateProject, setIsUpdateProject] = useState<
    'pending' | 'true' | 'false'
  >('pending');

  //validation id
  async function getSingleProject() {
    if (typeof id === 'number') {
      return dummyServices
        .get('/projects', {params: {id}})
        .then(res => {
          setProjectData(res.data.data[0]);
          return setIsUpdateProject('true');
        })
        .catch(err => {
          console.log({err});
          return setIsUpdateProject('false');
        });
    } else {
      return setIsUpdateProject('false');
    }
  }

  useEffect(() => {
    getSingleProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //logic for validation form
  const formUpdateMethods = useForm<any>({
    resolver: yupResolver(validateUpdateProject),
  });

  const formCreateMethods = useForm<any>({
    resolver: yupResolver(validateCreateProject),
  });

  useEffect(() => {
    if (projectData?.id) {
      formUpdateMethods.reset({
        ...projectData,
        errorsCount: projectData?.errorsCount?.toString(),
        warningCount: projectData?.warningCount?.toString(),
        deployCount: projectData?.deployCount?.toString(),
        percentageCompletion: projectData?.percentageCompletion?.toString(),
        reportNc: projectData?.reportNc?.toString(),
      });
    }
    return () => {
      formUpdateMethods.reset();
      formCreateMethods.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectData]);

  async function onSubmitForUpdateOrCreate(formData: IProject) {
    console.log('data=====>', formData);
    if (isLoading) {
      return;
    }
    setIsLoading(e => !e);

    if (isUpdateProject === 'true') {
      const dataFormUpdate = {
        // id: formData.id,
        project_name: formData.projectName,
        repo_url: formData.repoUrl,
        client: formData.client,
        developers: formData.developers,
        ci: formData.ci,
        cd: formData.cd,
        frontend_tecnology: formData.frontendTecnology,
        backend_tecnology: formData.backendTecnology,
        databases: formData.databases,
        errors_count: formData.errorsCount,
        warning_count: formData.warningCount,
        deploy_count: formData.deployCount,
        percentage_completion: formData.percentageCompletion,
        report_nc: formData.reportNc,
        status: formData.status,
      };
      return dummyServices
        .put(`/projects/${formData.id}`, {...dataFormUpdate})
        .then(res => {
          console.log(
            'en hora buena actualizates!!!! el proyecto====>',
            res.data,
          );
        })
        .catch(err => {
          console.log({err});
        })
        .finally(() => {
          setIsLoading(e => !e);
        });
    } else if (isUpdateProject === 'false') {
      const dataFormCreate = {
        project_name: formData.projectName,
        repo_url: formData.repoUrl,
        client: formData.client,
        developers: formData.developers,
        ci: formData.ci,
        cd: formData.cd,
        frontend_tecnology: formData.frontendTecnology,
        backend_tecnology: formData.backendTecnology,
        databases: formData.databases,
        errors_count: 0,
        warning_count: 0,
        deploy_count: 0,
        percentage_completion: 0,
        report_nc: 0,
        status: 'En Desarrollo',

        // Al crear un proyecto nuevo, los valores de alertas, errores, cantidad de
        // despliegues, avances, y nc’s deben ser cero, así como su estatus En
        // Desarrollo
      };
      return dummyServices
        .post('/projects', {...dataFormCreate})
        .then(res => {
          console.log('en hora buena creaste el proyecto====>', res.data);
        })
        .catch(err => {
          console.log({err});
        })
        .finally(() => {
          setIsLoading(e => !e);
        });
    }
  }
  return {
    //state
    isUpdateProject,
    isLoading,
    //methods
    formUpdateMethods,
    formCreateMethods,
    //functions
    onSubmitForUpdateOrCreate,
  };
}
