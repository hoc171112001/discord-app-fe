import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '@redux/store';

function ProtectedComponent() {
  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default ProtectedComponent;
