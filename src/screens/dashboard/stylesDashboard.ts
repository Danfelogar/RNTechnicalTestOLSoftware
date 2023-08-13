//dependencies
import {StyleSheet} from 'react-native';
//helpers
// import {heightFullScreen, widthFullScreen} from '../../helpers';
//types
import {IStylesDashboard} from './types';

export function dashboardStyles(props: IStylesDashboard) {
  const {
    colors: {background},
  } = props;
  return StyleSheet.create({
    containerDashboard: {
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 17,
      backgroundColor: background,
      paddingTop: 22,
    },
  });
}
