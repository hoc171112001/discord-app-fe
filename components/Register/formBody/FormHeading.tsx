import { useServerTranslation } from "@/config/i18n/server";
import { getLanguage } from "@/utils";
import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @FormHeading
 **/
const lang = getLanguage();

export const FormHeading: FC<IProps> = async (props) => {
  const { t } = await useServerTranslation(lang, "register");
  return (
    <h1 className="heading text-xl text-white font-semibold text-center mb-5">
      {t("heading")}
    </h1>
  );
};
