//dependencies
import React, {useContext, useEffect, useState} from 'react';
import {View, ScrollView, Platform} from 'react-native';
import {DataTable} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

//styles
import {tableStyles} from './stylesTable';
//types
import {IProject} from '../../screens/projects/types';
import {ITable} from './types';
//helpers
import {
  heightFullScreen,
  transformStringToArray,
  transformStringToArrayVariantComa,
} from '../../helpers';
//components
import {ThemeContext, UIContext} from '../../context';
import {dummyServices} from '../../services';
import {CustomText, SnackbarError} from '../custom';
import {ModalConfirm} from './ModalConfirm';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../redux/hooks';
import {authSelectors} from '../../redux/selectors/authSelectors';
//missing factorization TODO
export function Table({nameServices}: ITable) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {selectUserRol} = authSelectors();
  const userRol = useAppSelector(selectUserRol());
  const navigation = useNavigation<any>();
  const {isOpenModalWarningForDelete, changeStateModalWarningForDelete} =
    useContext(UIContext);
  //customStyles
  const {contentTable} = tableStyles({colors});

  //logic
  const [data, setData] = useState<IProject[] | []>([]);
  const [idForDelete, setIdForDelete] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSnackbarError, setIsSnackbarError] = useState(false);
  const [textError, setTextError] = useState<string | undefined>(undefined);

  const [pagination, setPagination] = useState({
    limit: 0,
    page: 0,
    total: 0,
  });
  const {limit, page, total} = pagination;

  function toggleSnackBarError() {
    setIsSnackbarError(!isSnackbarError);
  }

  async function getDataForTable(_page?: number) {
    return await dummyServices
      .get(nameServices, {params: {_page: !!_page && _page > 0 ? _page : 1}})
      .then(res => {
        setData(Object.keys(res.data.data).map(key => res.data.data[key]));
        setPagination({
          limit: res.data.pagination.limit,
          page: res.data.pagination.page,
          total: res.data.pagination.total,
        });
      })
      .catch(err => {
        console.log({err});
      });
  }

  useEffect(() => {
    getDataForTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function deleteSingleItem() {
    if (isLoading) {
      return;
    }
    setIsLoading(e => !e);
    return await dummyServices
      .put(`${nameServices}/${idForDelete}`)
      .then(res => {
        console.log('respuesta de borrar===>', res.data);
        setTextError(`Se borro con éxito el item con el id: ${idForDelete}`);
        changeStateModalWarningForDelete();
        getDataForTable();
        return toggleSnackBarError();
      })
      .catch(err => {
        console.log({err});
        setTextError(JSON.stringify(err));
        return toggleSnackBarError();
      })
      .finally(() => {
        setIsLoading(e => !e);
      });
  }

  function editSingleItem(id: number) {
    if (userRol === 'Admin') {
      navigation.navigate('Projects', {id});
    } else if (userRol === 'Dev') {
      setTextError(
        'Solo los administradores tienen acceso a esta funcionalidad ',
      );

      return toggleSnackBarError();
    }
  }

  function validationForDelete(id: number) {
    if (userRol === 'Admin') {
      setIdForDelete(id);
      changeStateModalWarningForDelete();
    } else if (userRol === 'Dev') {
      setTextError(
        'Solo los administradores tienen acceso a esta funcionalidad ',
      );

      return toggleSnackBarError();
    }
  }

  return (
    <View style={contentTable}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{width: 200}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Nombre del proyecto
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 200}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                URL del repo
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 200}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Cliente
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 300}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Desarrolladores
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 300}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Tecnologías Front
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 300}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Tencnologias Back
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 300}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Bases de datos
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 100}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Cont. Error
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 180}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Cont. Advertencias
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 180}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Numero de despliegues
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 180}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                % Completado
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 100}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Reporte NC
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 180}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Estado
              </CustomText>
            </DataTable.Title>
            <DataTable.Title style={{width: 100}}>
              <CustomText
                fontSize={14}
                fontWeight={'bold'}
                marginBottom={0}
                color={colors.textPrimary}>
                Acciones
              </CustomText>
            </DataTable.Title>
          </DataTable.Header>

          {data.map(item => (
            <DataTable.Row key={item?.id}>
              <DataTable.Cell style={{width: 200}}>
                <CustomText
                  fontSize={12}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  {item?.projectName}
                </CustomText>
              </DataTable.Cell>
              <DataTable.Cell style={{width: 200}}>
                <CustomText
                  fontSize={12}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  {item?.repoUrl}
                </CustomText>
              </DataTable.Cell>
              <DataTable.Cell style={{width: 200}}>
                <CustomText
                  fontSize={12}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  {item?.client}
                </CustomText>
              </DataTable.Cell>
              <DataTable.Cell style={{width: 300}}>
                {item?.developers &&
                  transformStringToArray(item?.developers).map((strg, idx) => (
                    <CustomText
                      key={idx}
                      fontSize={12}
                      fontWeight={'500'}
                      marginBottom={0}
                      color={colors.textSecondary}>
                      {strg}&nbsp;
                    </CustomText>
                  ))}
              </DataTable.Cell>
              <DataTable.Cell style={{width: 300}}>
                {item?.frontendTecnology &&
                  transformStringToArray(item?.frontendTecnology).map(
                    (strg, idx) => (
                      <CustomText
                        key={idx}
                        fontSize={12}
                        fontWeight={'500'}
                        marginBottom={0}
                        color={colors.textSecondary}>
                        {strg}&nbsp;
                      </CustomText>
                    ),
                  )}
              </DataTable.Cell>
              <DataTable.Cell style={{width: 300}}>
                {item?.backendTecnology &&
                  transformStringToArrayVariantComa(item?.backendTecnology).map(
                    (strg, idx) => (
                      <CustomText
                        key={idx}
                        fontSize={12}
                        fontWeight={'500'}
                        marginBottom={0}
                        color={colors.textSecondary}>
                        {strg}&nbsp;
                      </CustomText>
                    ),
                  )}
              </DataTable.Cell>
              <DataTable.Cell style={{width: 300}}>
                {item?.databases &&
                  transformStringToArray(item?.databases).map((strg, idx) => (
                    <CustomText
                      key={idx}
                      fontSize={12}
                      fontWeight={'500'}
                      marginBottom={0}
                      color={colors.textSecondary}>
                      {strg}&nbsp;
                    </CustomText>
                  ))}
              </DataTable.Cell>
              <DataTable.Cell style={{width: 100}}>
                <CustomText
                  fontSize={12}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  {item?.errorsCount?.toString()}
                </CustomText>
              </DataTable.Cell>
              <DataTable.Cell style={{width: 180}}>
                <CustomText
                  fontSize={12}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  {item?.warningCount?.toString()}
                </CustomText>
              </DataTable.Cell>
              <DataTable.Cell style={{width: 180}}>
                <CustomText
                  fontSize={12}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  {item?.deployCount?.toString()}
                </CustomText>
              </DataTable.Cell>
              <DataTable.Cell style={{width: 180}}>
                <CustomText
                  fontSize={12}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  {`${item?.percentageCompletion?.toString()} %`}
                </CustomText>
              </DataTable.Cell>
              <DataTable.Cell style={{width: 100}}>
                <CustomText
                  fontSize={12}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  {item?.reportNc?.toString()}
                </CustomText>
              </DataTable.Cell>
              <DataTable.Cell style={{width: 180}}>
                <CustomText
                  fontSize={12}
                  fontWeight={'500'}
                  marginBottom={0}
                  color={colors.textSecondary}>
                  {item?.status}
                </CustomText>
              </DataTable.Cell>
              <DataTable.Cell style={{width: 100}}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 100,
                    justifyContent: 'space-between',
                  }}>
                  <FontAwesome5
                    name="edit"
                    onPress={() => {
                      editSingleItem(item.id);
                    }}
                    size={heightFullScreen / 27}
                    color={colors.secondary}
                    style={{marginRight: 10}}
                  />
                  <AntDesign
                    onPress={() => {
                      validationForDelete(item.id);
                    }}
                    name="delete"
                    size={heightFullScreen / 27}
                    color={colors.red}
                  />
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(total / limit)}
            onPageChange={(page: number) => getDataForTable(page)}
            label={`${page}-${Math.ceil(total / limit)}`}
            showFastPaginationControls
          />
        </DataTable>
      </ScrollView>
      {isSnackbarError && (
        <SnackbarError
          setIsSnackbarError={setIsSnackbarError}
          isOpen={isSnackbarError}
          styled={{
            botton: 0,
            paddingHorizontal: Platform.OS === 'ios' ? 0 : 10,
          }}
          msmText={textError ? textError : 'Unexpected error please try again'}
        />
      )}
      {isOpenModalWarningForDelete && (
        <ModalConfirm
          isLoading={isLoading}
          serviceDelete={deleteSingleItem}
          id={idForDelete!}
        />
      )}
    </View>
  );
}
