"use client";
import { BaseClientComponent } from "@/types";
import { TextField } from "@mui/material";
import React, { FC } from "react";
import { Control, useWatch } from "react-hook-form";
import { RegisterFormValues } from ".";

const fieldName = "email";
interface IProps extends BaseClientComponent {
  label: string;
  register: (name: "email") => object;
  control: Control<RegisterFormValues>;
  isSubmited: boolean;
}

/**
 * @author
 * @function @Email
 **/

export const Email: FC<IProps> = ({ label, register, control, isSubmited }) => {
  const email = useWatch({ control, name: fieldName });
  if (!email && isSubmited) {
    console.log("error");
  }
  return (
    <div className="my-4">
      <label
        htmlFor={fieldName}
        className="text-desc font-semibold mb-2 text-xs label-required inline-block"
      >
        {label}
      </label>
      <TextField
        size="small"
        id={fieldName}
        type={fieldName}
        fullWidth
        {...register(fieldName)}
      />
    </div>
  );
};
