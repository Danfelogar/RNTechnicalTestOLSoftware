//dependencies
import React, {useContext} from 'react';
import {View, SafeAreaView, StatusBar, ScrollView} from 'react-native';
//styles
import {dashboardStyles} from './stylesDashboard';
//components
import {ThemeContext} from '../../context';
import {
  CPUReportCard,
  DashboardCard,
  ReleaseResumeCard,
  ReportCommitsCard,
} from './components';
import {useDashboard} from './useDashboard';

export function Dashboard() {
  //global context
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);
  //customStyles
  const {containerDashboard} = dashboardStyles({colors});
  //logic
  const {
    //state
    dashboardCard,
    cpuReports,
    reportCommits,
    releaseResume,
    //methods
    //functions
  } = useDashboard();
  return (
    <View style={containerDashboard}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.background}
          showHideTransition="slide"
          barStyle={dark ? 'light-content' : 'dark-content'}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <DashboardCard
            errorsDeploy={dashboardCard.errorsDeploy}
            pedingNc={dashboardCard.pedingNc}
            projects={dashboardCard.projects}
            projectsDev={dashboardCard.projectsDev}
          />
          <CPUReportCard
            deploys={cpuReports.deploys}
            percentajeTime={cpuReports.percentajeTime}
            time={cpuReports.time}
          />
          <ReportCommitsCard arrCommits={reportCommits} />
          <ReleaseResumeCard
            cicle={releaseResume.cicle}
            ncState={releaseResume.ncState}
            porcentaje={releaseResume.porcentaje}
            topProjects={releaseResume.topProjects}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
