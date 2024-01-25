import { Navigate, Outlet } from 'react-router-dom';
import { login } from '../store';
import { useAtomValue } from 'jotai';

const PetugasRoute = () => {
    const user = useAtomValue(login)
    return user?.user.role.toLocaleLowerCase() === "petugas" ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PetugasRoute;