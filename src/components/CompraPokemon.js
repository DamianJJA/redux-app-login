import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_pokemon_action, check_price_action, reduce_price_action, return_pokemon_action } from '../redux/actions/gameShopAction';

export const CompraPokemon = () => {

  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(buy_pokemon_action(1));
    dispatch(check_price_action(15));
  }
  
  const handleReturn = () => {
    dispatch(return_pokemon_action(1));
    dispatch(reduce_price_action(-15));
  }

  return (
    <div>
        <button className='btn btn-dark btn-sm mb-2'
                onClick={handleBuy}>Comprar Pokemon</button>
        <button className='btn btn-dark btn-sm'
                onClick={handleReturn}>Devolver Pokemon</button>
    </div>
  );
};


