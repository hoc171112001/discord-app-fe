import { useServerTranslation } from "@/config/i18n/server";
import { getLanguage } from "@/utils";
import { FC } from "react";
import { LoginEntries } from "./entries";

const lang = getLanguage();

interface IProps { }

/**
 * @author
 * @function @LoginInput
 **/

export const LoginInput: FC<IProps> = async () => {
  const { t } = await useServerTranslation(lang, "login");
  return (
    <div className="basis-3/5">
      <h2 className="text-white text-xl font-bold text-center">
        {t("heading")}
      </h2>
      <p className="text-desc text-center mt-3">{t("headingDesc")}</p>
      <LoginEntries lang={lang} />
    </div>
  );
};
