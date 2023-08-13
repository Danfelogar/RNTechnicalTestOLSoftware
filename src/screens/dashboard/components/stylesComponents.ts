//dependencies
import {StyleSheet} from 'react-native';
//helpers
//import {heightFullScreen, widthFullScreen} from '../../helpers';
//types
// import {IStylesComponentDashboard} from './types';

//dashboardFirstCARD

export function dashboardCardStyles() {
  return StyleSheet.create({
    containerCardDashboard: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    subContainerCardInformation: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}

// first chart
export function cpuReportsCardStyles() {
  return StyleSheet.create({
    containerCPUReportsCard: {
      borderRadius: 18,
      flexDirection: 'column',
      width: '100%',
      padding: 17,
      paddingTop: 26,
      marginTop: 28,
    },
    headerContent: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
}

//second chart
export function reportCommitsCardStyles() {
  return StyleSheet.create({
    containerReportCommitsCard: {
      borderRadius: 18,
      flexDirection: 'column',
      width: '100%',
      padding: 17,
      paddingTop: 26,
      marginTop: 28,
      marginBottom: 22,
    },
    circleDescribe: {
      width: 12,
      height: 12,
      borderRadius: 50,
      borderWidth: 2,
      marginRight: 16,
    },
    headerContent: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  });
}

//last chart
export function releaseResumeCardStyles() {
  return StyleSheet.create({
    containerReleaseResumeCard: {
      borderRadius: 18,
      flexDirection: 'column',
      width: '100%',
      padding: 17,
      paddingTop: 26,
      marginTop: 28,
      marginBottom: 22,
    },
    headerContent: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerCardDashboard: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    subContainerCardInformation: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
