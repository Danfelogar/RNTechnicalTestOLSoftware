//dependencies
import {useEffect, useState} from 'react';
//types
import {
  ICPUReports,
  IDashboardCards,
  IReleaseResume,
  IReportCommits,
  cpuReportsInitialState,
  dashboardCardsInitialState,
  reportCommitsInitialState,
} from './components';
//components
import {dummyServices} from '../../services';

export function useDashboard() {
  const [dashboardCard, setDashboardCard] = useState<IDashboardCards>(
    dashboardCardsInitialState,
  );
  const [cpuReports, setCpuReports] = useState<ICPUReports>(
    cpuReportsInitialState,
  );
  const [reportCommits, setReportCommits] = useState<IReportCommits[] | []>([]);

  const [releaseResume, setReleaseResume] = useState<IReleaseResume>(
    reportCommitsInitialState,
  );
  async function getServicesDashboard() {
    await dummyServices
      .get('/dashboard_cards')
      .then(res => {
        setDashboardCard(res.data.data);
      })
      .catch(err => {
        console.log({err});
      });
    await dummyServices
      .get('/cpu_report')
      .then(res => {
        setCpuReports(res.data.data);
      })
      .catch(err => {
        console.log({err});
      });
    await dummyServices
      .get('/report_commits')
      .then(res => {
        setReportCommits(res.data.data);
      })
      .catch(err => {
        console.log({err});
      });
    await dummyServices
      .get('/release_resume')
      .then(res => {
        setReleaseResume(res.data.data);
      })
      .catch(err => {
        console.log({err});
      });
  }

  useEffect(() => {
    getServicesDashboard();
  }, []);

  return {
    //state
    dashboardCard,
    cpuReports,
    reportCommits,
    releaseResume,
    //methods
    //functions
  };
}
