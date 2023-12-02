import { Collapse } from "@mui/material";
import React, { FC } from "react";

interface IProps {
  open: boolean;
  children: React.ReactNode;
}

/**
 * @author
 * @function @CollapseDescription
 **/

export const CollapseDescription: FC<IProps> = ({ open, children }) => {
  return (
    <Collapse in={open} collapsedSize={0} className="my-1">
      <span className="text-xs text-desc">{children}</span>
    </Collapse>
  );
};
