import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './UserAuthContext';

function ProtectedRoute({ children }) {
    let { user } = useUserAuth();
    if (!user) {
        return <Navigate to="/" noThrow />;
    }
    return children;
}

export default ProtectedRoute;
