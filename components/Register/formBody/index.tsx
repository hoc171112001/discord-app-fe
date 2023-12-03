import React, { FC } from "react";
import { Email } from "./Email";
import { DisplayName } from "./DisplayName";
import { Button } from "@mui/material";
import { UserName } from "./UserName";
import { Password } from "./Password";
import { DateOfBirth } from "./DateOfBirth";

interface IProps {}

/**
 * @author
 * @function @FormBody
 **/

export const FormBody: FC<IProps> = (props) => {
  return (
    <div className="form_body">
      <Email />
      <DisplayName />
      <UserName />
      <Password />
      <DateOfBirth />
      <Button fullWidth size="large" variant="contained">
        Continue
      </Button>
    </div>
  );
};
