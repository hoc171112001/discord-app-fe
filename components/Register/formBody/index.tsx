import React, { FC } from "react";
import { Email } from "./Email";
import { DisplayName } from "./DisplayName";
import { Button } from "@mui/material";
import { UserName } from "./UserName";
import { Password } from "./Password";
import { DateOfBirth } from "./DateOfBirth";
import { getLanguage } from "@/utils";
import { useServerTranslation } from "@/config/i18n/server";

interface IProps {}

/**
 * @author
 * @function @FormBody
 **/

const lang = getLanguage();

export const FormBody: FC<IProps> = async (props) => {
  const { t } = await useServerTranslation(lang, "register");
  return (
    <div className="form_body">
      <Email label={t("emailLabel")} />
      <DisplayName
        label={t("displayNameLabel")}
        description={t("displayNameDescription")}
      />
      <UserName
        label={t("userNameLabel")}
        description={t("userNameDescription")}
      />
      <Password label={t("passwordLabel")} />
      <DateOfBirth label={t("dobLabel")} />
      <Button fullWidth size="large" variant="contained">
        {t("submitBtn")}
      </Button>
    </div>
  );
};
