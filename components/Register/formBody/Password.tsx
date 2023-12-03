"use client";
import { TextField } from "@mui/material";
import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @Password
 **/

export const Password: FC<IProps> = (props) => {
  return (
    <div className="my-3">
      <label
        htmlFor="password"
        className="text-desc font-semibold text-xs label-required"
      >
        PASSWORD
      </label>
      <TextField size="small" id="email" type="password" fullWidth />
    </div>
  );
};
