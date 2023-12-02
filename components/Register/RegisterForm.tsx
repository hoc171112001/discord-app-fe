import { Button, TextField } from "@mui/material";
import React, { FC } from "react";
import { CollapseDescription } from "./CollapseDescriptionText";
import { EmailTextField } from "./EmailTextField";
interface IProps {}

/**
 * @author
 * @function @RegisterForm
 **/

const label = { inputProps: { "aria-label": "Switch demo" } };

export const RegisterForm: FC<IProps> = (props) => {
  return (
    <div className="form_register">
      <h1 className="heading text-xl text-white font-semibold text-center mb-5">
        Create an account
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
