import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProtectedRoute = ({ section }) => {
    const { user } = useAppContext();

    if(section === 'bcc' && user.userType !== 'BUSINESS') {
        return <Navigate to="/" replace />;
    }

    return user ? <Outlet /> : <Navigate to="/Signin" replace />;
};

export default ProtectedRoute;
