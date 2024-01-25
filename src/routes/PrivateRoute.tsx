import { Navigate, Outlet } from 'react-router-dom';
import { login } from 'src/store';
import { useAtomValue } from 'jotai';

const PrivateRoute = () => {
    const isLoggedIn = useAtomValue(login)
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;