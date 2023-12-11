import React, { FC } from "react";
import { FormHeading } from "./formBody/FormHeading";
import { FormBody } from "./formBody";
interface IProps {}

/**
 * @author
 * @function @RegisterForm
 **/

export const RegisterForm: FC<IProps> = async (props) => {
  return (
    <div className="form_register">
      <FormHeading />
      <FormBody />
    </div>
  );
};
