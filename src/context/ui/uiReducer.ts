import {IUIState} from './UIProvider';

type UIActionType =
  | {type: '[UI] Switching state modal notifications'}
  | {type: '[UI] Switching state modal nav'};

export const uiReducer = (state: IUIState, action: UIActionType): IUIState => {
  switch (action.type) {
    case '[UI] Switching state modal notifications':
      return {
        ...state,
        isOpenModalNotifications: !state.isOpenModalNotifications,
      };
    case '[UI] Switching state modal nav':
      return {
        ...state,
        isOpenModalNav: !state.isOpenModalNav,
      };

    default:
      return state;
  }
};
