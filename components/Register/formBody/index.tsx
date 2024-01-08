"use client";
import React, { FC, useState } from "react";
import { Email } from "./Email";
import { DisplayName } from "./DisplayName";
import { Button } from "@mui/material";
import { UserName } from "./UserName";
import { Password } from "./Password";
import { DateOfBirth } from "./DateOfBirth";
import { EmailAnnouncement } from "./EmailAnoucement";
import { MoreInfo } from "./RegisterMoreInfo";
import { LinkToLogin } from "./LinkToLogin";
import { BaseClientComponent } from "@/types";
import { useClientTranslation } from "@/config/i18n/client";
import { SubmitHandler, useForm } from "react-hook-form";

export interface RegisterFormValues {
  email: string;
  displayName: string;
  password: string;
  emailInformRegistry: boolean;
  userName: string;
  dob: string;
}

interface IProps extends BaseClientComponent {}

/**
 * @author
 * @function @FormBody
 **/

export const FormBody: FC<IProps> = ({ lang }) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const { t } = useClientTranslation(lang as string, "register");
  const { register, handleSubmit, control, setValue } =
    useForm<RegisterFormValues>();
  const onSubmit: SubmitHandler<RegisterFormValues> = async (
    data: RegisterFormValues
  ) => {
    setIsSubmited(true);
    console.log("data :", data);
  };

  return (
    <form className="form_body" onSubmit={handleSubmit(onSubmit)}>
      <Email
        register={register}
        control={control}
        isSubmited={isSubmited}
        lang={lang}
      />
      <DisplayName register={register} lang={lang} />
      <UserName
        register={register}
        control={control}
        lang={lang}
        isSubmited={isSubmited}
      />
      <Password
        register={register}
        control={control}
        lang={lang}
        isSubmited={isSubmited}
      />
      <DateOfBirth
        lang={lang}
        isSubmited={isSubmited}
        setFormValue={setValue}
      />
      <EmailAnnouncement lang={lang} register={register} />
      <Button fullWidth size="large" variant="contained" type="submit">
        {t("submitBtn")}
      </Button>
      <MoreInfo lang={lang} />
      <LinkToLogin lang={lang} />
    </form>
  );
};
