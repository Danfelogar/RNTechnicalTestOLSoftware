import {createContext} from 'react';

interface ContextProps {
  //state

  isOpenModalNotifications: boolean;
  isOpenModalNav: boolean;
  isOpenModalWarningForDelete: boolean;
  //functions
  changeStateModalNotifications: () => void;
  changeStateModalNav: () => void;
  changeStateModalWarningForDelete: () => void;
}

export const UIContext = createContext({} as ContextProps);
