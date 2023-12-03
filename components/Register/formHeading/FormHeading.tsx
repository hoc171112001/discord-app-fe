import { getRegisterDictionary } from "@/locales/authen/register/dictionaries";
import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @FormHeading
 **/

export const FormHeading: FC<IProps> = async (props) => {
  const dict = await getRegisterDictionary();
  return (
    <h1 className="heading text-xl text-white font-semibold text-center mb-5">
      {dict.heading}
    </h1>
  );
};
