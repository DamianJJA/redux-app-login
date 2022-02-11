import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import '../../index.css';

export const Login = () => {

    const {loginWithRedirect} = useAuth0();
    const handleLogin = () => {
        loginWithRedirect();
    }

  return (
    <button className='boton_login'
            onClick={handleLogin}>Login</button>
    
  )
}