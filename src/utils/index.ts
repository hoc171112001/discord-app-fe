import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';

export function isValidToken(token: any) {
  if (!token) return false;
  const userInfo: any = jwt_decode(token);
  return dayjs.unix(userInfo.exp).diff(dayjs()) > 1;
}
