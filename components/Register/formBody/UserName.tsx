"use client";
import React, { FC } from "react";
import { CollapseDescription } from "../../../shared/CollapseText/CollapseDescriptionText";
import { TextField } from "@mui/material";
import { useCollapse } from "@/shared/hooks/useCollapseHook";
import { BaseClientComponent } from "@/types";
import { IFormEntries } from "./types";
import { RegisterFormValues } from ".";
import { useClientTranslation } from "@/config/i18n/client";
import { useShowAdditionText } from "@/shared/hooks/useShowAdditionText";
import { StatusAdditionLabel } from "@/shared/StatusAdditionLabel";

interface IProps
  extends BaseClientComponent,
    IFormEntries<RegisterFormValues> {}

/**
 * @author
 * @function @UserName
 **/

export const UserName: FC<IProps> = ({
  register,
  control,
  isSubmited,
  lang,
}) => {
  const { open, onOpen, onCollapse } = useCollapse();
  const fieldName = "userName";
  const { showAdditionText } = useShowAdditionText<RegisterFormValues>({
    control,
    fieldName,
    isSubmited,
  });
  const { t } = useClientTranslation(lang as string, "register");
  return (
    <>
      <StatusAdditionLabel
        type="error"
        htmlFor={fieldName}
        required={true}
        showAdditionText={showAdditionText}
        additionText={t("required")}
      >
        {t("userNameLabel")}
      </StatusAdditionLabel>
      <TextField
        size="small"
        id={fieldName}
        fullWidth
        onFocus={onOpen}
        onBlur={onCollapse}
        {...register(fieldName)}
      />
      <CollapseDescription open={open}>
        {t("userNameDescription")}
      </CollapseDescription>
    </>
  );
};
