import {createContext} from 'react';

interface ContextProps {
  //state

  isOpenModalNotifications: boolean;
  isOpenModalNav: boolean;
  //functions
  changeStateModalNotifications: () => void;
  changeStateModalNav: () => void;
}

export const UIContext = createContext({} as ContextProps);
