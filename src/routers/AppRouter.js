import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Login } from '../components/login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

//aqui defino mis rutas
export const AppRouter = () => {
  return (
    <BrowserRouter>
        
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
        } />

        <Route path="/*" element={
               <PrivateRoute>
                    <DashboardRoutes/>
               </PrivateRoute>
        } />

        {/* <Route path="/*" element={<DashboardRoutes/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}
