import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProtectedRoute = () => {
    const { user } = useAppContext();

    return user ? <Outlet /> : <Navigate to="/Signin" replace />;
};

export default ProtectedRoute;
