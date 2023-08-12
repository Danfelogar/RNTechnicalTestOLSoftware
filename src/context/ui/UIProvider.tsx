import {FC, ReactNode, useReducer} from 'react';
import {uiReducer} from './uiReducer';
import {UIContext} from './UIContext';

export interface IUIState {
  isOpenModalNotifications: boolean;
  isOpenModalNav: boolean;
}

export const UI_INITIAL_STATE: IUIState = {
  isOpenModalNotifications: false,
  isOpenModalNav: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const changeStateModalNav = () => {
    dispatch({type: '[UI] Switching state modal nav'});
  };

  const changeStateModalNotifications = () => {
    dispatch({type: '[UI] Switching state modal notifications'});
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //functions
        changeStateModalNotifications,
        changeStateModalNav,
      }}>
      {children}
    </UIContext.Provider>
  );
};
