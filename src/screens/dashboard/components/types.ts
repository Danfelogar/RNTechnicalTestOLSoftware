import {IColorsProps} from '../../../context';

export interface IStylesComponentDashboard
  extends Pick<IColorsProps, 'colors'> {}

export interface IDashboardCards {
  projects: number;
  projectsDev: number;
  pedingNc: number;
  errorsDeploy: number;
}

export const dashboardCardsInitialState = {
  projects: 0,
  projectsDev: 0,
  pedingNc: 0,
  errorsDeploy: 0,
};

export interface ICPUReports {
  percentajeTime: number;
  deploys: number;
  time: ITimeDays[] | [];
}

export interface ITimeDays {
  time: string;
  value: number;
}

export const cpuReportsInitialState = {
  percentajeTime: 0,
  deploys: 0,
  time: [],
};

export interface IReportCommits {
  month: number;
  feat: number;
  fix: number;
}

export interface IReleaseResume {
  porcentaje: string;
  cicle: string;
  topProjects: ITopProject[] | [];
  ncState: INcState;
}

export interface INcState {
  detected: number;
  process: number;
  solved: number;
}

export interface ITopProject {
  name: string;
  porcentaje: string;
  isNc: boolean;
  isDelay: boolean;
  isDeliver: boolean;
}

export const reportCommitsInitialState = {
  porcentaje: '',
  cicle: '',
  topProjects: [],
  ncState: {
    detected: 0,
    process: 0,
    solved: 0,
  },
};
