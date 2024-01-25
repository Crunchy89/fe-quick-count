import { Navigate, Outlet } from 'react-router-dom';
import { login } from '../store';
import { useAtomValue } from 'jotai';

const PublicRoute = () => {
    const isLoggedIn = useAtomValue(login)
  return isLoggedIn ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;