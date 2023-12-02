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

export const getSelectedLangFromBrowser = () => {
  const headersList = headers();
  const languageList = headersList.get("accept-language")?.split(",");
  const selectedLanguage = languageList?.[0];
  return selectedLanguage || "en";
};
