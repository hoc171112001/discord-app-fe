"use client";
import { BaseClientComponent } from "@/types";
import { TextField } from "@mui/material";
import React, { FC } from "react";

interface IProps extends BaseClientComponent {
  label: string;
}

/**
 * @author
 * @function @Email
 **/

export const Email: FC<IProps> = ({ label }) => {
  return (
    <div className="my-4">
      <label
        htmlFor="email"
        className="text-desc font-semibold text-xs label-required"
      >
        {label}
      </label>
      <TextField size="small" id="email" type="email" fullWidth />
    </div>
  );
};
