import {IColorsProps} from '../context';

export interface IStylesComponents extends Pick<IColorsProps, 'colors'> {
  top: number;
}

export interface INotifications {
  id: number;
  type: 'info' | 'warning' | 'error';
  details: string;
  time: string;
}

export interface ITodos {
  id: number;
  description: string;
  check: boolean;
  hide: boolean;
}
