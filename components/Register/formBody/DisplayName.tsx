"use client";
import React, { FC } from "react";
import { CollapseDescription } from "./CollapseDescriptionText";
import { TextField } from "@mui/material";
import { useCollapse } from "@/shared/hooks/useCollapseHook";

interface IProps {}

/**
 * @author
 * @function @DisplayName
 **/

export const DisplayName: FC<IProps> = (props) => {
  const { open, onOpen, onCollapse } = useCollapse();
  return (
    <>
      <label htmlFor="displayname" className="text-desc font-semibold text-xs">
        DISPLAY NAME
      </label>
      <TextField
        size="small"
        id="displayname"
        fullWidth
        onFocus={onOpen}
        onBlur={onCollapse}
      />
      <CollapseDescription open={open}>
        This is how others see you. You can use special characters and emoji.
      </CollapseDescription>
    </>
  );
};
