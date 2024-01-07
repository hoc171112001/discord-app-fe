"use client";
import React, { FC } from "react";
import { CollapseDescription } from "../../../shared/CollapseText/CollapseDescriptionText";
import { TextField } from "@mui/material";
import { useCollapse } from "@/shared/hooks/useCollapseHook";
import { BaseClientComponent } from "@/types";
import { IFormEntries } from "./types";
import { RegisterFormValues } from ".";
import { useClientTranslation } from "@/config/i18n/client";

interface IProps
  extends BaseClientComponent,
    IFormEntries<RegisterFormValues> {}

/**
 * @author
 * @function @DisplayName
 **/

export const DisplayName: FC<IProps> = ({ register, lang }) => {
  const { open, onOpen, onCollapse } = useCollapse();
  const { t } = useClientTranslation(lang as string, "register");
  return (
    <div className="my-4">
      <label
        htmlFor="displayname"
        className="text-desc font-semibold mb-2 text-xs inline-block"
      >
        {t("displayNameLabel")}
      </label>
      <TextField
        size="small"
        id="displayname"
        fullWidth
        onFocus={onOpen}
        onBlur={onCollapse}
        {...register("displayName")}
      />
      <CollapseDescription open={open}>
        {t("displayNameDescription")}
      </CollapseDescription>
    </div>
  );
};
