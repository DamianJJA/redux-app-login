import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const Logout = () => {
    
    const {logout} = useAuth0();
    const handleLogout = () => logout({
        returnTo: window.location.origin
    })

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}