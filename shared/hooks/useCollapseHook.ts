'use client';
import { useState } from 'react';

/**
 * @author
 * @function @
 **/

export const useCollapse = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onCollapse = () => setOpen(false);
  return {
    open,
    onOpen,
    onCollapse
  };
};
