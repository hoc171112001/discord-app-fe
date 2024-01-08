import React, { FC } from "react";
import { AuthBox } from "@/shared/authBox";
import { RegisterForm } from "@/components/Register/RegisterForm";
import { Metadata } from "next";
interface IProps { }

/**
 * @author
 * @function @RegisterPage
 **/

// const debounce3Sec = async () => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("");
//     }, 3000);
//   });
//   return promise;
// };

export const metadata: Metadata = {
  title: 'Discord | register',
  description: '...',
}

const RegisterPage: FC<IProps> = async () => {
  // await debounce3Sec();
  return <AuthBox body={<RegisterForm />} />;
};

export default RegisterPage;
