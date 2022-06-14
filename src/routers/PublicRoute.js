import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

export const PublicRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    //const navigate = useNavigate();
    return user.isAuthenticated ? <Navigate to="/marvel" /> : children;
}
