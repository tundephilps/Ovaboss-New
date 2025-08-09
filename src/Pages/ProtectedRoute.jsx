import React from "react";
import { Navigate, Outlet, useLocation  } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProtectedRoute = ({ section }) => {
    const { user, businessAccounts } = useAppContext();
    const location = useLocation();
    const currentPath = location.pathname.toLowerCase();
    const ignorePages = ['createbusiness', 'business/onboarding', 'business/all', 'business/addnew']

    if(section === 'bcc' && user?.userType !== 'BUSINESS') {
        return <Navigate to="/" replace />;
    }

    if(section === 'bcc' && businessAccounts.length === 0 && !ignorePages.some(page => currentPath.includes(page))) {
        return <Navigate to="/CreateBusiness" />;
    }

    return user ? <Outlet /> : <Navigate to="/Signin" replace />;
};

export default ProtectedRoute;
