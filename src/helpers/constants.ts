//dependencies
import {Platform, Dimensions} from 'react-native';

export const BASE_URL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3100' : 'http://localhost:3100';
export const TOKEN_NAME = '@userJWT';
export const {width: widthFullScreen, height: heightFullScreen} =
  Dimensions.get('screen');

//transform String To Array
export function transformStringToArray(inputString: string) {
  return inputString.split('|');
}
export function transformStringToArrayVariantComa(inputString: string) {
  return inputString.split(',');
}

//for select input options

export const tecno_front = [
  {key: '1', value: 'React'},
  {key: '2', value: 'Angular'},
  {key: '3', value: 'Vue.js'},
  {key: '4', value: 'Svelte'},
  {key: '5', value: 'Ember.js'},
  {key: '6', value: 'Next.js'},
  {key: '7', value: 'Gatsby'},
  {key: '8', value: 'Webpack'},
  {key: '9', value: 'Parcel'},
  {key: '10', value: 'Babel'},
  {key: '11', value: 'TypeScript'},
  {key: '12', value: 'JavaScript'},
  {key: '13', value: 'HTML'},
  {key: '14', value: 'CSS'},
  {key: '15', value: 'Sass'},
];

export const tecno_back = [
  {key: '1', value: 'Node.js'},
  {key: '2', value: 'Express.js'},
  {key: '3', value: 'Django'},
  {key: '4', value: 'Ruby on Rails'},
  {key: '5', value: 'Spring Boot'},
  {key: '6', value: 'Laravel'},
  {key: '7', value: 'ASP.NET Core'},
  {key: '8', value: 'Flask'},
  {key: '9', value: 'Phoenix'},
  {key: '10', value: 'Go'},
  {key: '11', value: 'Java'},
  {key: '12', value: 'PHP'},
  {key: '13', value: 'Python'},
  {key: '14', value: 'Ruby'},
  {key: '15', value: 'C#'},
];

export const tecno_databases = [
  {key: '1', value: 'MySQL'},
  {key: '2', value: 'PostgreSQL'},
  {key: '3', value: 'MongoDB'},
  {key: '4', value: 'SQLite'},
  {key: '5', value: 'Redis'},
  {key: '6', value: 'MariaDB'},
  {key: '7', value: 'Oracle'},
  {key: '8', value: 'Cassandra'},
  {key: '9', value: 'DynamoDB'},
  {key: '10', value: 'Firebase'},
  {key: '11', value: 'Elasticsearch'},
  {key: '12', value: 'Couchbase'},
  {key: '13', value: 'Neo4j'},
  {key: '14', value: 'CouchDB'},
  {key: '15', value: 'SQLite'},
];
