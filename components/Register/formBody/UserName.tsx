"use client";
import React, { FC } from "react";
import { CollapseDescription } from "../../../shared/CollapseText/CollapseDescriptionText";
import { TextField } from "@mui/material";
import { useCollapse } from "@/shared/hooks/useCollapseHook";
import { BaseClientComponent } from "@/types";

interface IProps extends BaseClientComponent {
  label: string;
  description: string;
}

/**
 * @author
 * @function @UserName
 **/

export const UserName: FC<IProps> = ({ description, label }) => {
  const { open, onOpen, onCollapse } = useCollapse();
  return (
    <>
      <label
        htmlFor="username"
        className="text-desc font-semibold text-xs label-required"
      >
        {label}
      </label>
      <TextField
        size="small"
        id="username"
        fullWidth
        onFocus={onOpen}
        onBlur={onCollapse}
      />
      <CollapseDescription open={open}>{description}</CollapseDescription>
    </>
  );
};
