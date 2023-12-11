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
 * @function @DisplayName
 **/

export const DisplayName: FC<IProps> = ({ label, description }) => {
  const { open, onOpen, onCollapse } = useCollapse();
  return (
    <>
      <label htmlFor="displayname" className="text-desc font-semibold text-xs">
        {label}
      </label>
      <TextField
        size="small"
        id="displayname"
        fullWidth
        onFocus={onOpen}
        onBlur={onCollapse}
      />
      <CollapseDescription open={open}>{description}</CollapseDescription>
    </>
  );
};
