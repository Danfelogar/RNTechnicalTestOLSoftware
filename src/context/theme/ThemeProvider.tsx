import React, {FC, ReactNode, useEffect, useReducer} from 'react';
import {AppState, Appearance} from 'react-native';
import {ThemeContext} from './ThemeContext';
import {themeReducer} from './themeReducer';

export interface IColorsProps {
  dark: boolean;
  colors: {
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    background: string;
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

export interface IThemeState {
  theme: IColorsProps;
}

export const lightTheme = {
  dark: false,
  colors: {
    textPrimary: 'rgba(0, 0, 0, 0.87)',
    textSecondary: 'rgba(0, 0, 0, 0.6)',
    textDisabled: 'rgba(0, 0, 0, 0.38)',
    background: '#fff',
    divider: 'rgba(0, 0, 0, 0.12)',
    card: 'rgba(0, 0, 0, 0.08)',
    border: 'rgba(0, 0, 0, 0.04)',

    primary: '#1e3bb3',
    secondary: '#54caff',
    white: '#FFFFFF',
    purple: '#2D0046',
    purpleLight: '#8100C7',
    gray: '#8EA2AB',
    grayLight: '#ECECEC',
    orange: '#FBAC00',
    orangeLight: '#FBD071',
    red: '#DC2626',
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    textPrimary: '#fff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textDisabled: 'rgba(255, 255, 255, 0.5)',
    background: '#121212',
    divider: 'rgba(255, 255, 255, 0.12)',
    card: 'rgba(255, 255, 255, 0.16)',
    border: 'rgba(255, 255, 255, 0.08)',

    primary: '#1e3bb3',
    secondary: '#54caff',
    white: '#FFFFFF',
    purple: '#2D0046',
    purpleLight: '#8100C7',
    gray: '#8EA2AB',
    grayLight: '#ECECEC',
    orange: '#FBAC00',
    orangeLight: '#FBD071',
    red: '#DC2626',
  },
};

export const THEME_INITIAL_STATE: IThemeState = {
  theme: lightTheme,
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, THEME_INITIAL_STATE);

  const changeADarkMode = () => {
    dispatch({type: '[Theme] Switching To Light Mode', payload: darkTheme});
  };
  const changeALightMode = () => {
    dispatch({type: '[Theme] Switching To Dark Mode', payload: lightTheme});
  };

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? changeALightMode()
          : changeADarkMode();
      }
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        //functions
        changeADarkMode,
        changeALightMode,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
