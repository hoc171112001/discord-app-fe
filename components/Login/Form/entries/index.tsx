"use client";
import { useClientTranslation } from "@/config/i18n/client";
import { BaseClientComponent } from "@/types";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

interface IProps extends BaseClientComponent {}

/**
 * @author
 * @function @LoginEntries
 **/

export const LoginEntries: FC<IProps> = ({ lang }) => {
  const { t } = useClientTranslation(lang as string, "login");
  return (
    <div className="form-inputs">
      <div className="my-4">
        <label
          htmlFor="email"
          className="text-desc font-semibold text-xs label-required"
        >
          {t("emailOrPassword")}
        </label>
        <TextField size="small" id="email" type="email" fullWidth />
      </div>
      <div className="mt-4 mb-1">
        <label
          htmlFor="password"
          className="text-desc font-semibold text-xs label-required"
        >
          {t("password")}
        </label>
        <TextField size="small" id="password" type="password" fullWidth />
      </div>
      <span className="text-sm text-blue-500 hover:cursor-pointer hover:underline">
        {t("forgotPw")}
      </span>
      <Button
        style={{ margin: '20px 0 5px 0' }}
        fullWidth
        size="large"
        variant="contained"
      >
        {t("submitBtn")}
      </Button>
      <p className="text-s">
        <span>{t('needAccount')}</span>
        <span className="text-sm text-blue-500 hover:cursor-pointer hover:underline">
          <Link href={"/authen/register"}>{t("register")}</Link>
        </span>
      </p>
    </div>
  );
};
