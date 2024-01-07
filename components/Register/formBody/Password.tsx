"use client";
import { BaseClientComponent } from "@/types";
import { TextField } from "@mui/material";
import React, { FC } from "react";
import { IFormEntries } from "./types";
import { RegisterFormValues } from ".";
import { useClientTranslation } from "@/config/i18n/client";
import { StatusAdditionLabel } from "@/shared/StatusAdditionLabel";
import { useShowAdditionText } from "@/shared/hooks/useShowAdditionText";

interface IProps
  extends BaseClientComponent,
    IFormEntries<RegisterFormValues> {}

/**
 * @author
 * @function @Password
 **/

export const Password: FC<IProps> = ({
  register,
  control,
  isSubmited,
  lang,
}) => {
  const { t } = useClientTranslation(lang as string, "register");
  const fieldName = "userName";
  const { showAdditionText } = useShowAdditionText<RegisterFormValues>({
    control,
    fieldName,
    isSubmited,
  });

  return (
    <div className="my-4">
      <StatusAdditionLabel
        type="error"
        htmlFor={fieldName}
        required={true}
        showAdditionText={showAdditionText}
        additionText={t("required")}
      >
        {t("passwordLabel")}
      </StatusAdditionLabel>
      <TextField size="small" id="password" type="password" fullWidth />
    </div>
  );
};
