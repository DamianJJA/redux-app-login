import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const {isAuthenticated} = useAuth0(); 
    const location = useLocation();
    
    localStorage.setItem('lastPath', location.pathname);
    
    return (

        isAuthenticated ?
          children
        : <Navigate to ="/login" />
      
    );
}
