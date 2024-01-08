"use client";
import { BaseClientComponent } from "@/types";
import { TextField } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { Control, useWatch } from "react-hook-form";
import { RegisterFormValues } from ".";
import { StatusAdditionLabel } from "@/shared/StatusAdditionLabel";
import { useClientTranslation } from "@/config/i18n/client";
import { IFormEntries } from "./types";
import { useShowAdditionText } from "@/shared/hooks/useShowAdditionText";

const fieldName = "email";
interface IProps
  extends BaseClientComponent,
    IFormEntries<RegisterFormValues> {}

/**
 * @author
 * @function @Email
 **/

export const Email: FC<IProps> = ({ register, control, isSubmited, lang }) => {
  const { t } = useClientTranslation(lang as string, "register");
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
        {t("emailLabel")}
      </StatusAdditionLabel>

      <TextField
        size="small"
        id={fieldName}
        type={fieldName}
        fullWidth
        {...register(fieldName)}
      />
    </div>
  );
};
