import { Collapse } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  open: boolean;
  children: React.ReactNode;
  color?: 'error' | 'success' | 'warning' | 'default';
}

/**
 * @author
 * @function @CollapseDescription
 **/

export const CollapseDescription: FC<IProps> = ({ open, children, color = 'default' }) => {
  return (
    <Collapse in={open} collapsedSize={0}>
      <span className={`text-desc text-small font-medium ${color + '-color'}`} style={{ lineHeight: '34px' }}>
        {children}
      </span>
    </Collapse>
  );
};
