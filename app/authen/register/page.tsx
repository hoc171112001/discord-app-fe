import React, { FC } from "react";
import { AuthBox } from "@/shared/authBox";
import { RegisterForm } from "@/components/Register/RegisterForm";
interface IProps {}

/**
 * @author
 * @function @RegisterPage
 **/

const debounce3Sec = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 3000);
  });
  return promise;
};

const RegisterPage: FC<IProps> = async (props) => {
  await debounce3Sec();
  return <AuthBox body={<RegisterForm />} />;
};

export default RegisterPage;
