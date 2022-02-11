import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../../redux/actions/buscadorAction';


export const BuscadorPokemon = () => {

  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('mewtwo');

  const handleName = (event) => {
    setPokemonName(event.target.value); //con esto cambio el nombre del pokemon dinamicamente
  }

  const handleFetch = () => {
    dispatch(fetchPokemon(pokemonName));
  }

  return (
      <div className='form-group'>
          <label htmlFor='buscar_pokemon' className='text-white'>Buscar Pokemon</label>
          <p className='text-white'>
            Algunos ejemplos: [
            bulbasaur,
            ivysaur,
            venusaur,
            charmander,
            charmeleon,
            charizard,
            squirtle,
            wartortle,
            blastoise
            ]
          </p>
          <input type='text' className='form-control' id='buscar_pokemon' 
                 value={pokemonName}
                 onChange={handleName}
                 ></input>
          <button className='btn btn-primary mt-3'
                  onClick={handleFetch}>Enviar</button>
      </div>
  );
};
