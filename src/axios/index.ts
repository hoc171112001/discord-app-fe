import axios from 'axios';
import queryString from 'query-string';
import { changeAuthState } from '../redux/authSlice';
import { store } from '../redux/store';
import { isValidToken } from '../utils';
import {
  getRefreshToken,
  getTokenFromCookie,
  setCookieRefreshToken,
  setTokenToCookie,
} from './Cookie';

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) =>
    queryString.stringify(params, { skipNull: true, skipEmptyString: true }),
});

// Interceptors
axiosClient.interceptors.request.use(async (req: any) => {
  if (req.url.includes('/auth/login')) {
    return req;
  }

  let authTokens = getTokenFromCookie() || '';
  const validToken = isValidToken(authTokens);
  console.log('validToken :', validToken);

  if (!authTokens || !validToken) {
    // check if refresh token is expired
    const refreshToken: any = getRefreshToken();
    const isExpired = isValidToken(refreshToken);
    console.log('isExpired :', isExpired);

    if (!refreshToken || !isExpired) {
      store.dispatch(changeAuthState(false));
      return req;
    }

    try {
      // get refresh token
      console.log('<===== running here =====>');
      const response = await axios.post(`${baseURL}/auth/refreshToken`, {
        refreshToken,
      });

      setCookieRefreshToken(response.data.refToken);
      setTokenToCookie(response.data.accessToken);
      req.headers.Authorization = `Bearer ${response.data.accessToken}`;

      return req;
    } catch (error) {
      store.dispatch(changeAuthState(false));
    }
  } else {
    if (isValidToken(authTokens)) {
      req.headers.Authorization = `Bearer ${authTokens}`;
      store.dispatch(changeAuthState(true));
    }
    return req;
  }
});

axiosClient.interceptors.response.use(
  function (response) {
    (async function refreshTokenCall() {
      try {
        const res = await axios.post(`${baseURL}/auth/refreshToken`, {
          refreshToken: getRefreshToken(),
        });
        setTokenToCookie(res.data?.accessToken);
        setCookieRefreshToken(res.data?.refToken);
      } catch (err) {}
    })();
    if (response.status === 200) {
      return response;
    }
    return Promise.reject(response);
  },
  function (error) {
    if (error) {
      store.dispatch(changeAuthState(false));
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
