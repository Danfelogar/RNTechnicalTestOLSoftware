import {createContext} from 'react';
import {IColorsProps} from './ThemeProvider';

interface Props {
  dark: boolean;
  colors: {
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    bgMainColor: string;
    divider: string;
    card: string;
    border: string;

    primary: string;
    secondary: string;
    white: string;
    purple: string;
    purpleLight: string;
    gray: string;
    grayLight: string;
    orange: string;
    orangeLight: string;
    red: string;
  };
}

interface ContextProps {
  //state
  theme: Props;
  //functions
  changeADarkMode: (val: IColorsProps) => void;
  changeALightMode: (val: IColorsProps) => void;
}

export const ThemeContext = createContext({} as ContextProps);
