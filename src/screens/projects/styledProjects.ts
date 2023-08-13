//dependencies
import {StyleSheet} from 'react-native';
//helpers
import {heightFullScreen} from '../../helpers';
//types
import {IStylesProject} from './types';

export function projectStyles(props: IStylesProject) {
  const {
    colors: {background, primary},
  } = props;
  return StyleSheet.create({
    containerProject: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      paddingHorizontal: 17,
      backgroundColor: background,
      paddingTop: 22,
    },
    contentBts: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    btnCreate: {
      backgroundColor: primary,
      paddingHorizontal: 50,
      paddingVertical: 17,
      borderRadius: 17,
    },
    contentInput: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxHeight: heightFullScreen * 0.5,
      marginBottom: 22,
    },
    btnAction: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: '17%',
      paddingVertical: '5%',
      marginTop: 10,
      borderRadius: 11,
    },
  });
}
