import { getSelectedLangFromBrowser } from "@/utils";

export const fallbackLng: string = getSelectedLangFromBrowser();
export const languages = [fallbackLng, "de"];
export const defaultNS = "en";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
