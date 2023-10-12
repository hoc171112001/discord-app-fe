import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import queryString from 'query-string';
import { changeAuthState } from '@redux/authSlice';
import { store } from '@redux/store';
import { isValidToken } from '@utils/index';
import {
  getRefreshToken,
  getTokenFromCookie,
  setCookieRefreshToken,
  setTokenToCookie,
} from './cookie';

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params: any) =>
    queryString.stringify(params, { skipNull: true, skipEmptyString: true }),
});

// Interceptors
axiosClient.interceptors.request.use(async (req: AxiosRequestConfig) => {
  if (!req?.headers) return req;

  const refreshToken: string = getRefreshToken() || '';
  const authTokens: string = getTokenFromCookie() || '';

  // if token is still valid
  if (isValidToken(authTokens)) {
    req.headers.Authorization = `Bearer ${authTokens}`;
    store.dispatch(changeAuthState(true));
    return req;
  }

  // if refresh token invalid
  if (!isValidToken(refreshToken)) {
    store.dispatch(changeAuthState(false));
    return req;
  }

  // send refresh token request
  if (!req?.url?.includes('/auth/')) {
    const response = await sendRefreshToken(refreshToken);
    if (!response) {
      store.dispatch(changeAuthState(false));
      return req;
    }
    req.headers.Authorization = `Bearer ${response.data.accessToken}`;
    setCookieRefreshToken(response.data.refreshToken);
    setTokenToCookie(response.data.accessToken);
  }

  return req;
});

const sendRefreshToken = async (refreshToken: string) => {
  try {
    const response = await axios.post(`${baseURL}/auth/refresh-token`, {
      refreshToken,
    });
    return response;
  } catch {
    return false;
  }
};

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

export default axiosClient;
