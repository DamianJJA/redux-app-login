import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Login } from '../components/login/Login';
import { DashboardRoutes } from './DashboardRoutes';

//aqui defino mis rutas
export const AppRouter = () => {
  return (
    <BrowserRouter>
        
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<DashboardRoutes/>} />

      </Routes>
    </BrowserRouter>
  )
}
