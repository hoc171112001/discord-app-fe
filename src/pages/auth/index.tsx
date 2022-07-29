import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthPrivate() {
  return (
    <div className="register_wrapper">
      <Outlet />
    </div>
  );
}
