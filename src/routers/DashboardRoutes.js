import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/interfaz/Navbar'
import { DashboardScreen } from '../components/paginas/DashboardScreen'
import { PokemonScreen } from '../components/paginas/PokemonScreen'
import { SearchScreen } from '../components/paginas/SearchScreen'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
        
        <Route path="pokemon" element={<PokemonScreen />} />
        <Route path="buscar" element={<SearchScreen />} />
        <Route path="dashboard" element={<DashboardScreen />} />

        <Route path="/" element={<PokemonScreen />} />

      </Routes>
    </>
  )
}
