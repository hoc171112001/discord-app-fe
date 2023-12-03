"use client";
import { TextField } from "@mui/material";
import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @Email
 **/

export const Email: FC<IProps> = (props) => {
  return (
    <div className="my-3">
      <label
        htmlFor="email"
        className="text-desc font-semibold text-xs label-required"
      >
        EMAIL
      </label>
      <TextField size="small" id="email" type="email" fullWidth />
    </div>
  );
};
