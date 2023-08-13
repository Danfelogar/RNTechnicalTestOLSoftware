//dependencies
import React, {useContext} from 'react';
import {View, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {FormProvider} from 'react-hook-form';

//types
import {RootStackPrivateParams} from '../../navigation';
interface Props extends StackScreenProps<RootStackPrivateParams, 'Projects'> {}
//components
import {ThemeContext} from '../../context';
import {projectStyles} from './styledProjects';
import {useProject} from './useProject';
import {CustomText} from '../../components';
import {ProjectFrom} from './ProjectFrom';

export function Projects({route}: Props) {
  const {id} = route.params;

  //navigateProps
  //global context
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);
  //customStyles
  const {containerProject} = projectStyles({colors});
  //logic
  const {
    //state
    isUpdateProject,
    isLoading,
    //methods
    formUpdateMethods,
    formCreateMethods,
    //functions
    onSubmitForUpdateOrCreate,
  } = useProject({id});
  return (
    <View style={containerProject}>
      <SafeAreaView style={{...containerProject, width: '100%'}}>
        <StatusBar
          backgroundColor={colors.background}
          showHideTransition="slide"
          barStyle={dark ? 'light-content' : 'dark-content'}
        />
        <ScrollView
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          pagingEnabled
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={{width: '100%'}}>
            <CustomText
              fontSize={26}
              fontWeight={'bold'}
              marginBottom={13}
              color={colors.textPrimary}>
              {id === 'undefined'
                ? 'Creando Proyecto'
                : `Actualizar Proyecto ${id}`}
            </CustomText>
            {isUpdateProject === 'false' && (
              <FormProvider {...formCreateMethods}>
                <ProjectFrom
                  id={id}
                  isLoading={isLoading}
                  onSubmitForUpdateOrCreate={onSubmitForUpdateOrCreate}
                />
              </FormProvider>
            )}
            {isUpdateProject === 'true' && (
              <FormProvider {...formUpdateMethods}>
                <ProjectFrom
                  id={id}
                  isLoading={isLoading}
                  onSubmitForUpdateOrCreate={onSubmitForUpdateOrCreate}
                />
              </FormProvider>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
