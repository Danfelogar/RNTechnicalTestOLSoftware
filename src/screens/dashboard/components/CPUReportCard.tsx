//dependencies
import React, {useContext} from 'react';
import {View} from 'react-native';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryPie,
  VictoryTheme,
} from 'victory-native';
//styles
import {cpuReportsCardStyles} from './stylesComponents';
//types
import {ICPUReports} from './types';
//helpers
import {transformDataForChart, widthFullScreen} from '../../../helpers';
//component
import {ThemeContext} from '../../../context';
import {CustomText} from '../../../components';

export function CPUReportCard({deploys, percentajeTime, time}: ICPUReports) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {containerCPUReportsCard, headerContent} = cpuReportsCardStyles();
  return (
    <View style={{...containerCPUReportsCard, backgroundColor: colors.card}}>
      <View style={headerContent}>
        <CustomText
          fontSize={19}
          fontWeight={'bold'}
          marginBottom={9}
          color={colors.textPrimary}>
          Detalles Del Servidor
        </CustomText>
        <CustomText
          fontSize={14}
          fontWeight={'bold'}
          marginBottom={9}
          color={colors.textPrimary}>
          {`Despliegues: ${deploys.toString()}`}
        </CustomText>
      </View>
      <CustomText
        fontSize={16}
        fontWeight={'400'}
        marginBottom={0}
        color={colors.textSecondary}>
        Información sobre el consumo y uso del servidor principal para del
        desarrollo
      </CustomText>
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
          labelComponent={
            <VictoryLabel
              style={{fill: colors.textSecondary}}
              dy={-7}
              dx={30}
            />
          }
          data={transformDataForChart(time)}
        />

        <VictoryAxis
          // key={i}
          // label={d.time}
          // tickValues={time.map(it => it.time)}
          // axisValue={d.time}
          style={{
            tickLabels: {fill: colors.textSecondary, fontSize: 10},
            grid: {stroke: 'none'},
          }}
          tickLabelComponent={
            <VictoryLabel
              angle={-45}
              style={{
                fontSize: 11,
                fill: colors.textSecondary,
              }}
            />
          }
        />

        <VictoryAxis
          // tickValues={time.map(it => it.value)}
          dependentAxis
          style={{
            tickLabels: {fill: colors.textSecondary, fontSize: 10},
            grid: {stroke: 'none'},
          }}
        />
      </VictoryChart>
      <CustomText
        fontSize={19}
        fontWeight={'bold'}
        marginBottom={9}
        color={colors.textPrimary}>
        Porcentajes de despliegue
      </CustomText>
      <VictoryPie
        width={widthFullScreen * 0.9}
        colorScale={[colors.primary, colors.orange]}
        data={[
          {x: percentajeTime, y: percentajeTime},
          {x: 100 - percentajeTime, y: 100 - percentajeTime},
        ]}
      />
    </View>
  );
}
