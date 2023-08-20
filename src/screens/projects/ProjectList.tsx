//dependencies
import React, {useContext} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

//styles
import {projectStyles} from './styledProjects';
//helpers
import {heightFullScreen} from '../../helpers';
//components
import {ThemeContext} from '../../context';
import {Button, CustomText, Table} from '../../components';
import {useAppSelector} from '../../redux/hooks';
import {authSelectors} from '../../redux/selectors/authSelectors';

export function ProjectList() {
  //global context
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);
  const {selectUserRol} = authSelectors();
  const userRol = useAppSelector(selectUserRol());
  const navigation = useNavigation<any>();
  //customStyles
  const {containerProject, contentBts, btnCreate} = projectStyles({colors});
  return (
    <View style={containerProject}>
      <SafeAreaView style={{...containerProject, width: '100%'}}>
        <StatusBar
          backgroundColor={colors.background}
          showHideTransition="slide"
          barStyle={dark ? 'light-content' : 'dark-content'}
        />
        {userRol === 'Admin' && (
          <View style={contentBts}>
            <Button
              // isLoading={isLoading}
              buttonStyle={btnCreate}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('Projects', {id: 'undefined'});
              }}
              firstIcon={
                <FontAwesome5
                  name="clipboard-list"
                  size={heightFullScreen / 40}
                  color={colors.white}
                  style={{marginRight: 10}}
                />
              }
              textContent={
                <CustomText
                  fontSize={22}
                  fontWeight={'bold'}
                  marginBottom={0}
                  color={colors.white}>
                  Crear
                </CustomText>
              }
            />
          </View>
        )}
        <Table nameServices={'/projects'} />
      </SafeAreaView>
    </View>
  );
}
