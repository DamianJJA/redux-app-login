import { buy_pokemon, return_pokemon } from "../actions/gameShopAction";

const gamesInitialState = {
    pokemon: 30
}

export const game_reducer = (state = gamesInitialState, action) => {
    switch (action.type) {
        case buy_pokemon:
            return{
                ...state,
                pokemon: state.pokemon - action.payload
            }

        case return_pokemon:
            return{
                ...state,
                pokemon: state.pokemon + action.payload
            }
    
        default:
            return state;
    }
}