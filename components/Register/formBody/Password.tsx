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
    <div className="my-4">
      <label
        htmlFor="password"
        className="text-desc font-semibold mb-2 text-xs label-required inline-block"
      >
        {label}
      </label>
      <TextField size="small" id="password" type="password" fullWidth />
    </div>
  );
};
