import { getSelectedLangFromBrowser } from "@/utils";
import "server-only";

const registerDictionaries: any = {
  en: () =>
    import("@/locales/authen/register/en.json").then(
      (module) => module.default
    ),
};

const browserLang: string = getSelectedLangFromBrowser();

export const getRegisterDictionary = async () => {
  const defaultLang = "en";
  const hasLocale = browserLang in registerDictionaries;
  const selectedLang = hasLocale ? browserLang : defaultLang;
  return registerDictionaries[selectedLang]();
};
