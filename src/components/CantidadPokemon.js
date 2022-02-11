import React from 'react';
import { useSelector } from 'react-redux';


export const CantidadPokemon = () => {

    //Destructuro de game_reducer para no escribir en Unidades: {game_reducer.pokemon}
    const {pokemon} = useSelector(state => state.game_reducer);
    const {price} = useSelector(state => state.price_reducer);

  return (
    <>
        Unidades: {pokemon} <br />
        Precio: $ {price}
    </>
  );
};
