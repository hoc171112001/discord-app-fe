"use client";
import { BaseClientComponent } from "@/types";
import { TextField } from "@mui/material";
import React, { FC } from "react";

interface IProps extends BaseClientComponent {
  label: string;
}

/**
 * @author
 * @function @Password
 **/

export const Password: FC<IProps> = ({ label }) => {
  return (
    <div className="my-3">
      <label
        htmlFor="password"
        className="text-desc font-semibold text-xs label-required"
      >
        {label}
      </label>
      <TextField size="small" id="password" type="password" fullWidth />
    </div>
  );
};
