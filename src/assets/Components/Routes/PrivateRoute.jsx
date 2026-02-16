import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import Orders from '../Orders/Orders';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>;
    }

    if (user) {
        return children
    }

    else
        return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;