import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { headers } from "next/headers";

const getSelectedLangFromBrowser = () => {
  const headersList = headers();
  const languageList = headersList.get("accept-language")?.split(",");
  const selectedLanguage = languageList?.[0];
  return selectedLanguage || "en";
};

const lang = getSelectedLangFromBrowser();
export const languages = [lang, "de"];
export const defaultNS = "en";
export const cookieName = "i18next";

export function getOptions(lng = lang, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    lang,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(ns: string, options: any = {}) {
  const i18nextInstance = await initI18next(lang, ns);
  return {
    t: i18nextInstance.getFixedT(
      lang,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
