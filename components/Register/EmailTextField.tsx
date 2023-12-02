"use client";
import React, { FC } from "react";
import { CollapseDescription } from "./CollapseDescriptionText";
import { TextField } from "@mui/material";
import { useCollapse } from "@/shared/hooks/useCollapseHook";

interface IProps {}

/**
 * @author
 * @function @EmailTextField
 **/

export const EmailTextField: FC<IProps> = (props) => {
  const { open, onOpen, onCollapse } = useCollapse();
  return (
    <>
      <TextField
        defaultValue="Small"
        size="small"
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
