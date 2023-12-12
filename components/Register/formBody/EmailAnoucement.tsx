"use client";
import { useClientTranslation } from "@/config/i18n/client";
import { BaseClientComponent } from "@/types";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { FC } from "react";
interface IProps extends BaseClientComponent {}
/**
 * @author
 * @function @EmailAnnouncement
 **/
export const EmailAnnouncement: FC<IProps> = ({ lang }) => {
  const { t } = useClientTranslation(lang as string, "register");
  return (
    <div className="my-4 flex items-start justify-center">
      <FormControlLabel
        control={<Checkbox size="medium" className="shrink-0 p-0" />}
        label={t("registerMailAnnouncement")}
      />
    </div>
  );
};
