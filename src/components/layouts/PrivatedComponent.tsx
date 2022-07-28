import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

interface PrivateProps {
  isAuth: boolean;
  children: React.ReactNode;
  path: string;
}

function PrivatedComponent({ isAuth, children, ...rest }: PrivateProps) {
  return (
    <Routes>
      {isAuth ? <Route {...rest}>{children}</Route> : <Navigate to={'/login'} replace={true} />}
    </Routes>
  );
}

export default PrivatedComponent;
