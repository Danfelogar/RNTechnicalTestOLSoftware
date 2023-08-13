import * as _lodash from 'lodash';
import {IReportCommits} from '../screens/dashboard/components/types';
//example
// const input = [
//   {
//     time: '27/07/2022',
//     value: '0',
//   },
//   {
//     time: '29/07/2022',
//     value: '100',
//   },
// ];

export function transformDataForChart(
  input: Array<{time: string; value: number}>,
): Array<{x: string; y: number}> {
  const output = _lodash.map(input, item => ({
    x: formatDate(item.time),
    y: item.value,
  }));

  function formatDate(dateStr: string): string {
    const [day, month] = dateStr.split('/');
    const months = [
      'ENE',
      'FEB',
      'MAR',
      'ABR',
      'MAY',
      'JUN',
      'JUL',
      'AGO',
      'SEP',
      'OCT',
      'NOV',
      'DIC',
    ];
    const formattedMonth = months[parseInt(month, 10) - 1];

    return `${day}/${formattedMonth}`;
  }

  return output;
}
//example
// const a = [
//   {
//     month: 1,
//     feat: 100,
//     fix: 20,
//   },
//   {
//     month: 2,
//     feat: 50,
//     fix: 20,
//   },
// ];

// const b = [
//   {
//     x: 'JAN',
//     y: 100,
//   },
//   {
//     x: 'FEB',
//     y: 50,
//   },
// ];

// const c = [
//   {
//     x: 'JAN',
//     y: 20,
//   },
//   {
//     x: 'FEB',
//     y: 20,
//   },
// ];

interface ItemIterator {
  x: string;
  y: number;
}

export function transformDataForReportCommits(a: IReportCommits[]): {
  chartFeat: ItemIterator[];
  chartFix: ItemIterator[];
} {
  const chartFeat: ItemIterator[] = _lodash.map(a, item => ({
    x: getMonthString(item.month),
    y: item.feat,
  }));

  const chartFix: ItemIterator[] = _lodash.map(a, item => ({
    x: getMonthString(item.month),
    y: item.fix,
  }));

  return {chartFeat, chartFix};
}

function getMonthString(month: number): string {
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  return monthNames[month - 1];
}
