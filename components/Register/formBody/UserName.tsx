"use client";
import React, { FC } from "react";
import { CollapseDescription } from "./CollapseDescriptionText";
import { TextField } from "@mui/material";
import { useCollapse } from "@/shared/hooks/useCollapseHook";

interface IProps {}

/**
 * @author
 * @function @UserName
 **/

export const UserName: FC<IProps> = (props) => {
  const { open, onOpen, onCollapse } = useCollapse();
  return (
    <>
      <label
        htmlFor="username"
        className="text-desc font-semibold text-xs label-required"
      >
        USERNAME
      </label>
      <TextField
        size="small"
        id="username"
        fullWidth
        onFocus={onOpen}
        onBlur={onCollapse}
      />
      <CollapseDescription open={open}>
        Please only use numbers, letters, underscores _ , or periods.
      </CollapseDescription>
    </>
  );
};
