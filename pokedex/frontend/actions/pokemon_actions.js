import { fetchAllPokemon, fetchSinglePokemon } from '../util/api_util'


//index
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON'

export const receiveAllPokemon = (pokemon) => ({
    type: 'RECEIVE_ALL_POKEMON',
    pokemon: pokemon
});

export const requestAllPokemon = () => (dispatch) => (
    fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)
    
    
//show
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON'

export const recieveSinglePokemon = ({pokemon, items}) => {
    return {
    type: 'RECEIVE_SINGLE_POKEMON',
    pokemon,
    items
}};

export const requestSinglePokemon = (id) => (dispatch) => (
    fetchSinglePokemon(id)
    .then(pokemon => dispatch(recieveSinglePokemon(pokemon)))
);