import React from 'react'
import { CantidadPokemon } from '../CantidadPokemon'
import { CompraPokemon } from '../CompraPokemon'

export const PokemonScreen = () => {
  return (
    <>

    <div className='App container'>
      <div className='row'>
        <div className='col-12'>
          <div className='card mt-5' style={{maxWidth: '370px'}}>
            <div className='row no-gutters'>
              <div className='col-4'>
                <img src={require('../../img/Pokemon.jpg')} alt='pokemon' className='card-img' />
              </div>
              <div className='col-8'>
                <div className='card-body'>
                  <div className='card-title h3 text-center'>
                    <CantidadPokemon />
                  </div>
                  <CompraPokemon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
