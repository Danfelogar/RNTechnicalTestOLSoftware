//dependencies
import React, {useContext} from 'react';
import {View} from 'react-native';
//styles
import {dashboardCardStyles} from './stylesComponents';
//types
import {IDashboardCards} from './types';
//component
import {ThemeContext} from '../../../context';
import {CustomText} from '../../../components';

export function DashboardCard({
  errorsDeploy,
  pedingNc,
  projects,
  projectsDev,
}: IDashboardCards) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {containerCardDashboard, subContainerCardInformation} =
    dashboardCardStyles();
  return (
    <View style={containerCardDashboard}>
      <View style={subContainerCardInformation}>
        <CustomText
          fontSize={16}
          fontWeight={'500'}
          marginBottom={7}
          color={colors.textSecondary}>
          Proyectos
        </CustomText>
        <CustomText
          fontSize={18}
          fontWeight={'bold'}
          marginBottom={0}
          color={colors.textPrimary}>
          {projects?.toString()}
        </CustomText>
      </View>
      <View style={subContainerCardInformation}>
        <CustomText
          fontSize={16}
          fontWeight={'500'}
          marginBottom={7}
          color={colors.textSecondary}>
          En desarrollo
        </CustomText>
        <CustomText
          fontSize={18}
          fontWeight={'bold'}
          marginBottom={0}
          color={colors.textPrimary}>
          {projectsDev?.toString()}
        </CustomText>
      </View>
      <View style={subContainerCardInformation}>
        <CustomText
          fontSize={16}
          fontWeight={'500'}
          marginBottom={7}
          color={colors.textSecondary}>
          Pendientes
        </CustomText>
        <CustomText
          fontSize={18}
          fontWeight={'bold'}
          marginBottom={0}
          color={colors.textPrimary}>
          {pedingNc?.toString()}
        </CustomText>
      </View>
      <View style={subContainerCardInformation}>
        <CustomText
          fontSize={16}
          fontWeight={'500'}
          marginBottom={7}
          color={colors.textSecondary}>
          Errores
        </CustomText>
        <CustomText
          fontSize={18}
          fontWeight={'bold'}
          marginBottom={0}
          color={colors.textPrimary}>
          {errorsDeploy?.toString()}
        </CustomText>
      </View>
    </View>
  );
}
