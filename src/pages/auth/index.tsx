import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthPrivate() {
  return (
    <>
      <Outlet />
    </>
  );
}
