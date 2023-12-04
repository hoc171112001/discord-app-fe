import { useTranslation } from "@/config/i18n/server";
import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @FormHeading
 **/

export const FormHeading: FC<IProps> = async (props) => {
  const { t } = await useTranslation("register");
  return (
    <h1 className="heading text-xl text-white font-semibold text-center mb-5">
      {t("heading")}
    </h1>
  );
};
