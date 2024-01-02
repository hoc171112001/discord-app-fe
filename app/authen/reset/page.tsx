import { AuthBox } from "@/shared/authBox";
import Image from "next/image";
import React, { FC } from "react";
import resetImg from "@/public/reset-pw.svg";
import { Button, TextField } from "@mui/material";
import { useServerTranslation } from "@/config/i18n/server";
import { getLanguage } from "@/utils";
const lang = getLanguage();
const ResetPwBody = async () => {
  const { t } = await useServerTranslation(lang, "reset");
  return (
    <div>
      <Image
        src={resetImg}
        alt="discord-reset-password"
        className="m-auto mb-5"
      />
      <h1 className="text-white text-lg text-center font-semibold mb-5">
        {t("title")}
      </h1>
      <label
        htmlFor="password"
        className="text-desc font-semibold text-xs label-required"
      >
        {t("newPw")}
      </label>
      <TextField
        size="small"
        id="password"
        type="password"
        fullWidth
        style={{ marginTop: "4px", marginBottom: "18px" }}
      />
      <Button fullWidth size="large" variant="contained">
        {t("submitBtn")}
      </Button>
    </div>
  );
};

const ResetPwPage = () => {
  return <AuthBox body={<ResetPwBody />} />;
};

export default ResetPwPage;
