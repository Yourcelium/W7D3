import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from "react-router-dom";

import { fetchAllPokemon } from './util/api_util';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions'
import configureStore from './store/store'
import PokemonIndexContainer from './components/pokemon/pokemon_index_container'
import PokemonDetailContainer from './components/pokemon/pokemon_detail_container'


const Root = ({ store }) => (
  <Provider store={store}>
    < HashRouter>
        <div className='container'>
          < Route path="/" component={PokemonIndexContainer} />
          < Route path="/pokemon/:id" component={PokemonDetailContainer} />
        </div>
    </HashRouter>
  </Provider>
);

export default Root;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

//testing

let store = configureStore()
window.store = store
window.fetchAllPokemon = fetchAllPokemon;
window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon
window.getState = store.getState; 
window.dispatch = store.dispatch;
window.requestSinglePokemon = requestSinglePokemon
