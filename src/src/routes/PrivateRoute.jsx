import { Outlet, Navigate } from 'react-router-dom';
import { JWT_LOCAL_STORAGE } from '../utils/contant';

const PrivateRoute = () => {
    const token = localStorage.getItem(JWT_LOCAL_STORAGE);
    return (
       token ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRoute;