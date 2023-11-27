import { TextField } from "@mui/material";
import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @RegisterForm
 **/

export const RegisterForm: FC<IProps> = (props) => {
  return (
    <div className="form_register">
      <h1 className="heading text-xl text-white font-semibold">
        Create an account
      </h1>
      <div className="form_body">
        <TextField id="filled-basic" label="account" variant="filled" />
      </div>
    </div>
  );
};
