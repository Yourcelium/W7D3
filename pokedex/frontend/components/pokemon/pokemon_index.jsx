import React from 'react'
import PokemonIndexItem from './pokemon_index_item'

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllPokemon();
      }

    render() {
        
        const pokemon = this.props.pokemon.map((poke) => <PokemonIndexItem pokemon={ poke } key={ poke.id } />)
        return (
            <ul className="index-list">
                { pokemon }
            </ul>
        )
    }
}

export default PokemonIndex;
