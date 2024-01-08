import { Collapse } from '@mui/material';
import React, { FC } from 'react';

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
    <Collapse in={open} collapsedSize={0}>
      <span className="text-desc text-small font-medium" style={{ lineHeight: '34px' }}>
        {children}
      </span>
    </Collapse>
  );
};
