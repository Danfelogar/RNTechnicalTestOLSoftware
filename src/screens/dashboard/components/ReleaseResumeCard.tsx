//dependencies
import React, {useContext} from 'react';
import {View} from 'react-native';
import {VictoryPie} from 'victory-native';
//styles
import {releaseResumeCardStyles} from './stylesComponents';
//types
import {IReleaseResume} from './types';
//helpers
import {widthFullScreen} from '../../../helpers';
//component
import {ThemeContext} from '../../../context';
import {CustomText} from '../../../components';

export function ReleaseResumeCard({
  cicle,
  porcentaje,
  ncState,
  topProjects,
}: IReleaseResume) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {
    containerReleaseResumeCard,
    headerContent,
    containerCardDashboard,
    subContainerCardInformation,
  } = releaseResumeCardStyles();
  return (
    <View style={{...containerReleaseResumeCard, backgroundColor: colors.card}}>
      <View style={headerContent}>
        <CustomText
          fontSize={19}
          fontWeight={'bold'}
          marginBottom={9}
          color={colors.textPrimary}>
          Entregas
        </CustomText>
        <CustomText
          fontSize={14}
          fontWeight={'bold'}
          marginBottom={9}
          color={colors.textPrimary}>
          {`Porcentaje: ${porcentaje.toString()}%`}
        </CustomText>
      </View>
      <CustomText
        fontSize={15}
        fontWeight={'400'}
        marginBottom={9}
        color={colors.textPrimary}>
        {`Fecha de emisión: ${cicle}`}
      </CustomText>
      <CustomText
        fontSize={19}
        fontWeight={'bold'}
        marginBottom={9}
        color={colors.textPrimary}>
        Top proyectos del mes
      </CustomText>
      {topProjects.map((item, idx) => (
        <View key={idx}>
          <CustomText
            fontSize={15}
            fontWeight={'bold'}
            marginBottom={9}
            color={colors.textPrimary}>
            {item.name}
          </CustomText>
          <VictoryPie
            width={widthFullScreen * 0.8}
            colorScale={[colors.primary, colors.orange]}
            data={[
              {x: 'progreso', y: Number(item.porcentaje)},
              {
                x: 'faltante',
                y: 100 - Number(item.porcentaje),
              },
            ]}
          />
        </View>
      ))}
      <View style={containerCardDashboard}>
        <View style={subContainerCardInformation}>
          <CustomText
            fontSize={16}
            fontWeight={'500'}
            marginBottom={7}
            color={colors.textSecondary}>
            Detectados
          </CustomText>
          <CustomText
            fontSize={18}
            fontWeight={'bold'}
            marginBottom={0}
            color={colors.textPrimary}>
            {ncState?.detected.toString()}
          </CustomText>
        </View>
        <View style={subContainerCardInformation}>
          <CustomText
            fontSize={16}
            fontWeight={'500'}
            marginBottom={7}
            color={colors.textSecondary}>
            En progreso
          </CustomText>
          <CustomText
            fontSize={18}
            fontWeight={'bold'}
            marginBottom={0}
            color={colors.textPrimary}>
            {ncState?.process.toString()}
          </CustomText>
        </View>
        <View style={subContainerCardInformation}>
          <CustomText
            fontSize={16}
            fontWeight={'500'}
            marginBottom={7}
            color={colors.textSecondary}>
            Solucionados
          </CustomText>
          <CustomText
            fontSize={18}
            fontWeight={'bold'}
            marginBottom={0}
            color={colors.textPrimary}>
            {ncState?.solved.toString()}
          </CustomText>
        </View>
      </View>
    </View>
  );
}
