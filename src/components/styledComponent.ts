//dependencies
import {StyleSheet} from 'react-native';
//helpers
import {widthFullScreen} from '../helpers';
//types
import {IStylesComponents} from './types';
import {IColorsProps} from '../context';

//styled of header
export function headerStyles(props: IStylesComponents) {
  const {
    colors: {background},
    top,
  } = props;
  return StyleSheet.create({
    containerHeader: {
      backgroundColor: background,
      height: top + 50,
      width: widthFullScreen,
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapperHeader: {
      flexDirection: 'row',
      width: widthFullScreen * 0.95,
      height: '100%',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    wrapperModalIcons: {
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center',
    },
    badgeStyle: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      right: 0,
    },
  });
}

//styled of modal nav
export function modalNavStyles(props: IStylesComponents) {
  const {
    colors: {background},
    top,
  } = props;
  return StyleSheet.create({
    containerModal: {
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
      height: '100%',
      width: widthFullScreen * 0.56,
      paddingTop: top + 20,
      paddingHorizontal: 20,
      backgroundColor: background,
    },
    contentListItems: {
      width: '100%',
      paddingBottom: 18,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
}

//styled of modal nav
export function modalNotificationsStyles(props: Pick<IColorsProps, 'colors'>) {
  const {
    colors: {background},
  } = props;
  return StyleSheet.create({
    containerModal: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
      height: '70%',
      width: widthFullScreen,
      padding: 30,
      backgroundColor: background,
      marginBottom: 20,
    },
    titleHeader: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 18,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
}

//styled of card notifications

export function CardNotificationsStyles() {
  return StyleSheet.create({
    containerCard: {
      width: '100%',
      height: 80,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 21,
      borderRadius: 14,
      marginBottom: 20,
      borderWidth: 2,
    },
    containerHeader: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
}

//styled of card todo

export function CardTodosStyles() {
  return StyleSheet.create({
    containerCard: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 6,
      marginVertical: 4,
    },
    circleFinish: {
      width: 25,
      height: 25,
      borderRadius: 50,
      borderWidth: 2,
      marginRight: 16,
    },
    circlePending: {
      width: 25,
      height: 25,
      borderRadius: 50,
      borderWidth: 2,
      marginRight: 16,
    },
  });
}
