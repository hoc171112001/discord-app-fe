import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { headers } from "next/headers";

export function isValidToken(token: any) {
  if (!token) return false;
  const userInfo: any = jwt_decode(token);
  return dayjs.unix(userInfo.exp).diff(dayjs()) > 1;
}

export const convertDate = (year: any, month: any, day: any) => {
  if (Number(month) > 10) month = "0" + month;
  if (Number(day) > 10) day = "0" + day;
  return dayjs(`${year}-${month}-${day}`).format();
};

export const getLanguage = () => {
  const langList = headers().get("accept-language")?.split(",") || ["en"];
  const lang = langList[0];
  return lang;
};