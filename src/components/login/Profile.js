import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { DashboardScreen } from '../paginas/DashboardScreen';

export const Profile = () => {

    const {isLoading} = useAuth0();
    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }


  return (
    <DashboardScreen/>
  )
}