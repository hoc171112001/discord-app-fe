import "server-only";

const registerDictionaries: any = {
  en: () =>
    import("@/locales/authen/register/en.json").then(
      (module) => module.default
    ),
};

export const getRegisterDictionary = async (locale: string = "en") =>
  registerDictionaries[locale]();
