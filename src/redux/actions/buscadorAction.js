import axios from "axios";

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

//Actions

export const fetchPokemonRequest = () => {
    return{
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (Pokemon) => {
    return{
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fetchPokemonFailure = (error) => {
    return{
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

//instalamos npm i axios
//axios una libreria para hacer peticiones de manera simple
export const fetchPokemon = (valor) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(fetchPokemonSuccess([response.data]));
            })
            .catch(error => {
                dispatch(fetchPokemonFailure('No se encontro el pokemon'));
            });
    }
}