import {IColorsProps} from '../../context';

export interface IStylesProject extends Pick<IColorsProps, 'colors'> {}

export interface IProject {
  id: number;
  projectName: string;
  repoUrl: string;
  client: string;
  developers: string;
  ci: boolean;
  cd: boolean;
  frontendTecnology: string;
  backendTecnology: string;
  databases: string;
  errorsCount: number;
  warningCount: number;
  deployCount: number;
  percentageCompletion: number;
  reportNc: number;
  status: string;
}
