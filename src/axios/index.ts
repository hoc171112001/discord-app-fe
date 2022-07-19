import axios from 'axios';
import queryString from 'query-string';
import { getToken } from './Cookie';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_LOCAL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) =>
    queryString.stringify(params, { skipNull: true, skipEmptyString: true }),
});

// Interceptors
axiosClient.interceptors.request.use(function (config) {
  config.headers = {
    'Content-Type': 'application/json',
    Authorization: getToken('Auth-Token') || `Bearer ${getToken('Auth-Token')}`,
  };
  return config;
});

axiosClient.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      return response;
    }
    return Promise.reject(response);
  },
  function (error) {
    if (error.response.status === 401) window.location.reload();
    return Promise.reject(error);
  },
);

export default axiosClient;
