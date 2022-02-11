import React from 'react'
import { BuscadorPokemon } from '../buscador/BuscadorPokemon'
import { ResultadoPokemon } from '../buscador/ResultadoPokemon'

export const SearchScreen = () => {
  return (
    <div>
      <div className='col-12 mt-4 border-top pt-3'>
        <BuscadorPokemon />
      </div>
      <div className='col-12'>
        <ResultadoPokemon />
      </div>
    </div>
    
  )
}
