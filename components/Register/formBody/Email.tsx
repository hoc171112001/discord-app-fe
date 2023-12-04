"use client";
import { useClientTranslation } from "@/config/i18n/client";
import { TextField } from "@mui/material";
import React, { FC } from "react";
import { useSelector } from "react-redux";

interface IProps {}

/**
 * @author
 * @function @Email
 **/

export const Email: FC<IProps> = (props) => {
  const { t } = useClientTranslation("en", "register");
  return (
    <div className="my-3">
      <label
        htmlFor="email"
        className="text-desc font-semibold text-xs label-required"
      >
        {t("emailLabel")}
      </label>
      <TextField size="small" id="email" type="email" fullWidth />
    </div>
  );
};
