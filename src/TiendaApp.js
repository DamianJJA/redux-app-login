import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { Auth } from './components/login/Auth';



//Conecta la app con redux


export const Tienda = () => {

  return (
    <Auth0Provider domain='dev-9j8c5z84.us.auth0.com' 
                   clientId='2OElTMnPw2FnN1cp8S7e9f2aDZT25Ab9'
                   redirectUri={window.location.origin}>
      <Auth/>
    </Auth0Provider>
  );
};
