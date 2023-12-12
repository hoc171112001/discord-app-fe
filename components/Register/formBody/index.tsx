import React, { FC } from "react";
import { Email } from "./Email";
import { DisplayName } from "./DisplayName";
import { Button } from "@mui/material";
import { UserName } from "./UserName";
import { Password } from "./Password";
import { DateOfBirth } from "./DateOfBirth";
import { getLanguage } from "@/utils";
import { useServerTranslation } from "@/config/i18n/server";
import { EmailAnnouncement } from "./EmailAnoucement";
import { MoreInfo } from "./RegisterMoreInfo";
import { LinkToLogin } from "./LinkToLogin";

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
      <DateOfBirth />
      <EmailAnnouncement lang={lang} />
      <Button fullWidth size="large" variant="contained">
        {t("submitBtn")}
      </Button>
      <MoreInfo lang={lang} />
      <LinkToLogin lang={lang} />
    </div>
  );
};
