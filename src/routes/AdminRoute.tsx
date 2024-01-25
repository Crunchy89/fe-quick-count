import { Navigate, Outlet } from 'react-router-dom';
import { login } from '../store';
import { useAtomValue } from 'jotai';

const AdminRoute = () => {
    const user = useAtomValue(login)
    return user?.user.role.toLocaleLowerCase() === "admin" ? <Outlet /> : <Navigate to="/tps" />;
};

export default AdminRoute;