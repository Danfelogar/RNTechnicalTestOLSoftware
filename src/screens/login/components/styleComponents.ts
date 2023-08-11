//dependencies
import {StyleSheet} from 'react-native';
//types
import {IStylesLoginFormStyle} from './types';
//helpers
import {heightFullScreen} from '../../../helpers';

export function loginFormStyles({backgroundColor}: IStylesLoginFormStyle) {
  return StyleSheet.create({
    contentInput: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxHeight: heightFullScreen * 0.5,
      marginBottom: 22,
    },
    contentBts: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    btnLoginStyle: {
      backgroundColor,
      paddingHorizontal: 50,
      paddingVertical: 17,
      borderRadius: 17,
      marginLeft: 15,
    },
  });
}
