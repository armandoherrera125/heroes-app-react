import React,{ useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

export const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const {pathname, search} = useLocation();
    console.log(pathname, search)
    if (pathname) {
      localStorage.setItem('lastPath', JSON.stringify(pathname + search));  
    }
    return user.isAuthenticated ? children : <Navigate to='/login' />;
}
