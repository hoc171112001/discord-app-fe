import { Button } from "@mui/material";
import React, { FC } from "react";
import { EmailTextField } from "./EmailTextField";
import { getRegisterDictionary } from "@/locales/authen/register/dictionaries";
interface IProps {}

/**
 * @author
 * @function @RegisterForm
 **/

export const RegisterForm: FC<IProps> = async (props) => {
  const dict = await getRegisterDictionary("en");
  return (
    <div className="form_register">
      <h1 className="heading text-xl text-white font-semibold text-center mb-5">
        {dict.heading}
      </h1>
      <div className="form_body">
        <EmailTextField />
        <Button fullWidth size="large" variant="contained">
          Continue
        </Button>
      </div>
    </div>
  );
};
