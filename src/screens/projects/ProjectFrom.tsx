//dependencies
import React, {useContext} from 'react';
import {View, Platform} from 'react-native';
import {useFormContext} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
//styles
import {projectStyles} from './styledProjects';
//types
import {IProject} from './types';
//componentes
import {ThemeContext} from '../../context';
import {Button, CustomText, InputGeneric, InputSelect} from '../../components';

export function ProjectFrom({
  isLoading,
  id,
  onSubmitForUpdateOrCreate,
}: {
  isLoading: boolean;
  id: number | 'undefined';
  onSubmitForUpdateOrCreate: (formData: IProject) => void;
}) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //controller
  const {control, handleSubmit: onSubmit} = useFormContext<IProject>();

  //customStyles
  const {contentInput, btnAction} = projectStyles({colors});
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === 'android' ? 10 : 140}
      extraHeight={Platform.OS === 'android' ? 20 : 40}
      enableAutomaticScroll={true}>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'projectName'}
          borderColor={colors.textPrimary}
          placeholder="Nombre del Proyecto"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'repoUrl'}
          borderColor={colors.textPrimary}
          placeholder="Url del repo"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'client'}
          borderColor={colors.textPrimary}
          placeholder="Nombre del cliente"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'developers'}
          borderColor={colors.textPrimary}
          placeholder="Desarrolladores"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'ci'}
          borderColor={colors.textPrimary}
          placeholder="CI"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'cd'}
          borderColor={colors.textPrimary}
          placeholder="CD"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'frontendTecnology'}
          borderColor={colors.textPrimary}
          placeholder="Tecnologías frontend"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'backendTecnology'}
          borderColor={colors.textPrimary}
          placeholder="Tecnologías backend"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'databases'}
          borderColor={colors.textPrimary}
          placeholder="Databases"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'errorsCount'}
          borderColor={colors.textPrimary}
          placeholder="Cont. errores"
          keyboardType="number-pad"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'warningCount'}
          borderColor={colors.textPrimary}
          placeholder="Cont. advertencias"
          keyboardType="number-pad"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'deployCount'}
          borderColor={colors.textPrimary}
          placeholder="Cont. despliegues"
          keyboardType="number-pad"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'percentageCompletion'}
          borderColor={colors.textPrimary}
          placeholder="% del desarrollo"
          keyboardType="number-pad"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'reportNc'}
          borderColor={colors.textPrimary}
          placeholder="Reportes NC"
          keyboardType="number-pad"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'status'}
          borderColor={colors.textPrimary}
          placeholder="Estatus"
          keyboardType="default"
          placeholderTextColor={colors.textSecondary}
          inputColor={colors.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={contentInput}>
        <InputSelect />
      </View>
      <Button
        buttonStyle={{
          ...btnAction,
          backgroundColor: colors.purpleLight,
          borderWidth: 1,
          borderColor: colors.purpleLight,
        }}
        isLoading={isLoading}
        onPress={onSubmit(onSubmitForUpdateOrCreate)}
        activeOpacity={0.9}
        textContent={
          <CustomText
            fontSize={17}
            fontWeight={'bold'}
            marginBottom={0}
            color={colors.white}>
            {id === 'undefined' ? 'Crear Proyecto' : 'Actualizar Proyecto'}
          </CustomText>
        }
      />
    </KeyboardAwareScrollView>
  );
}
