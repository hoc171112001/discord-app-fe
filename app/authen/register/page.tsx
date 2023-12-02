import React, { FC } from "react";
import { AuthBox } from "@/shared/authBox";
import { RegisterForm } from "@/components/Register/RegisterForm";
interface IProps {}

/**
 * @author
 * @function @RegisterPage
 **/

const RegisterPage: FC<IProps> = (props) => {
  return <AuthBox body={<RegisterForm />} />;
};

export default RegisterPage;
