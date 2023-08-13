//dependencies
import {StyleSheet} from 'react-native';
//helpers
import {heightFullScreen, widthFullScreen} from '../../helpers';
//types
import {IColorsProps} from '../../context';

export function tableStyles(props: Pick<IColorsProps, 'colors'>) {
  const {colors} = props;
  return StyleSheet.create({
    contentTable: {
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: 17,
      backgroundColor: colors.card,
      marginTop: 22,
      borderRadius: 12,
    },
  });
}

//modal confirm
export function modalConfirmStyles(props: Pick<IColorsProps, 'colors'>) {
  const {colors} = props;
  return StyleSheet.create({
    containerModal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
      height: heightFullScreen * 0.3,
      width: widthFullScreen * 0.86,
      paddingTop: 30,
      paddingHorizontal: 30,
      backgroundColor: colors.background,
    },
    btnStyle: {
      marginTop: 16,
      backgroundColor: colors.red,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 17,
    },
    backBtn: {
      width: '100%',
      position: 'absolute',
      zIndex: -1,
      height: '100%',
    },
  });
}
