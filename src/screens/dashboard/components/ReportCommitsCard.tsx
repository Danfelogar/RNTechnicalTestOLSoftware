//dependencies
import React, {useContext} from 'react';
import {View} from 'react-native';
import {
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
} from 'victory-native';
//styles
import {reportCommitsCardStyles} from './stylesComponents';
//types
import {IReportCommits} from './types';
//helpers
import {transformDataForReportCommits, widthFullScreen} from '../../../helpers';
//component
import {ThemeContext} from '../../../context';
import {CustomText} from '../../../components';

export function ReportCommitsCard({
  arrCommits,
}: {
  arrCommits: IReportCommits[];
}) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {containerReportCommitsCard, circleDescribe, headerContent} =
    reportCommitsCardStyles();
  //logic
  const transformData = transformDataForReportCommits(arrCommits);
  return (
    <View style={{...containerReportCommitsCard, backgroundColor: colors.card}}>
      <CustomText
        fontSize={19}
        fontWeight={'bold'}
        marginBottom={9}
        color={colors.textPrimary}>
        Reporte De Commits Por Mes
      </CustomText>
      <CustomText
        fontSize={14}
        fontWeight={'400'}
        marginBottom={9}
        color={colors.textSecondary}>
        Total commits últimos 12 meses
      </CustomText>
      <View style={headerContent}>
        <View
          style={{
            ...circleDescribe,
            backgroundColor: colors.purpleLight,
            borderColor: colors.purpleLight,
          }}
        />
        <CustomText
          fontSize={14}
          fontWeight={'500'}
          marginBottom={0}
          color={colors.textPrimary}>
          Arreglos
        </CustomText>
      </View>
      <View style={headerContent}>
        <View
          style={{
            ...circleDescribe,
            backgroundColor: colors.orange,
            borderColor: colors.orange,
          }}
        />
        <CustomText
          fontSize={14}
          fontWeight={'500'}
          marginBottom={0}
          color={colors.textPrimary}>
          Logros
        </CustomText>
      </View>
      <VictoryChart
        width={widthFullScreen * 0.9}
        theme={VictoryTheme.material}
        scale={{x: 'linear', y: 'linear'}}>
        <VictoryLine
          name={'line'}
          interpolation={'monotoneX'}
          style={{
            data: {stroke: colors.purpleLight},
          }}
          labels={({datum}) => datum.y}
          labelComponent={<VictoryLabel dy={-7} dx={30} />}
          data={transformData.chartFix}
        />
        <VictoryLine
          name={'line'}
          interpolation={'monotoneX'}
          style={{
            data: {stroke: colors.orange},
          }}
          labels={({datum}) => datum.y}
          labelComponent={<VictoryLabel dy={-7} dx={30} />}
          data={transformData.chartFeat}
        />
      </VictoryChart>
    </View>
  );
}
