import React, { FC } from "react";
import { FormHeading } from "./formBody/FormHeading";
import { FormBody } from "./formBody";
import { getLanguage } from "@/utils";
interface IProps {}

/**
 * @author
 * @function @RegisterForm
 **/

const lang = getLanguage();

export const RegisterForm: FC<IProps> = async (props) => {
  return (
    <div className="form_register">
      <FormHeading />
      <FormBody lang={lang} />
    </div>
  );
};
