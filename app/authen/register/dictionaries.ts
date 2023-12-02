import "server-only";

const dictionaries: any = {
  en: () =>
    import("@/locale/authen/register/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
