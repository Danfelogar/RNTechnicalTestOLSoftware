import axios from 'axios';
import {BASE_URL, transformSnakeIntoCamelCase} from '../helpers';

const jsonApi = axios.create({
  baseURL: BASE_URL,
});

jsonApi.interceptors.request.use(config => {
  // Add default query parameters to each request
  config.params = {
    ...config.params,
    _limit: config?.params?._limit || 10,
    _page: config?.params?._page || 1,
  };

  return config;
});

jsonApi.interceptors.response.use(
  res => {
    // Ajusta la ruta según tu endpoint
    const limit = parseInt(res.config.params._limit);
    const page = parseInt(res.config.params._page);
    const total = parseInt(res.headers['x-total-count']);

    res.data = {
      // the code of the response interceptor or middleware (snake_case to camelCase)
      data: transformSnakeIntoCamelCase(res.data),
      pagination: {
        limit,
        page,
        total,
      },
    };

    return res;
  },
  error => {
    return Promise.reject(error);
  },
);

export default jsonApi;
