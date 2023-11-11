import Cookies from 'js-cookie';

export function getTokenFromCookie(TokenKey = 'Auth-Token') {
  return Cookies.get(TokenKey);
}

export function setTokenToCookie(token: string, TokenKey = 'Auth-Token') {
  return Cookies.set(TokenKey, token);
}

export function removeTokenToCookie(TokenKey = 'Auth-Token') {
  return Cookies.remove(TokenKey);
}

export function clearCookie() {
  return Object.keys(Cookies.get()).forEach((tokenName) => Cookies.remove(tokenName));
}

export function setIsLoginToCookie(token: string, TokenKey = 'Login') {
  return Cookies.set(TokenKey, token);
}
export function getIsLoginFromCookie(TokenKey = 'Login') {
  return Cookies.get(TokenKey);
}

export function setCookieRefreshToken(token: string, TokenKey = 'Refresh-Token') {
  return Cookies.set(TokenKey, token);
}

export function getRefreshToken(TokenKey = 'Refresh-Token') {
  return Cookies.get(TokenKey);
}
