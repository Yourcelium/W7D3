import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { fetchAllPokemon } from './util/api_util';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import configureStore from './store/store'


const Root = ({ store }) => (
  <Provider store={store}>
    <div>Dink Dink donk Dink donk donk donk</div>
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
window.fetchAllPokemon = fetchAllPokemon;
window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon
window.getState = store.getState; 
window.dispatch = store.dispatch;
