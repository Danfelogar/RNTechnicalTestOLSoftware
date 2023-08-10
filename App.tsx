import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dummyServices} from './src/services';
import {BASE_URL} from './src/helpers/constants';
import {AxiosError} from 'axios';

function App(): JSX.Element {
  console.log({BASE_URL});
  const servise = async () => {
    return await dummyServices
      .get('/users')
      .then(res => {
        console.log(
          Platform.OS === 'android' ? 'android' : 'ios',
          res.headers['x-total-count'],
          res.data.data[0].lastName,
        );
      })
      .catch((err: AxiosError) => console.log(err));
  };

  servise();
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor="orange" />
      <View>
        <Text>
          Hello <Icon name="rocket" size={30} color="#900" />
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
