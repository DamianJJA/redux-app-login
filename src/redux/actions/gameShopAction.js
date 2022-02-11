export const buy_pokemon = 'BUY_POKEMON';
export const return_pokemon = 'RETURN_POKEMON';
export const check_price = 'CHECK_PRICE';
export const reduce_price = 'REDUCE_PRICE';

export const buy_pokemon_action = (cant) => {
    return{
        type: buy_pokemon,
        payload: cant
    }
}

export const return_pokemon_action = (cant) => {
    return{
        type: return_pokemon,
        payload: cant
    }
}

export const check_price_action = (cant) => {
    return{
        type: check_price,
        payload: cant
    }
}

export const reduce_price_action = (cant) => {
    return{
        type: check_price,
        payload: cant
    }
}