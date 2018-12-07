
import React, { Component } from 'react'

export default class componentName extends Component { 
    componentDidMount() {
        this.props.requestSinglePokemon(this.props.id)
    }

    componentDidUpdate(prevProp) {
        if (prevProp.id !== this.props.id) this.props.requestSinglePokemon(this.props.id);
    }


    render() {
        if (this.props.pokemon === undefined) {
            return null;
        }
        let pokemon = this.props.pokemon;

        if (pokemon.moves === undefined) {
            return null;
        }

        let moves = pokemon.moves.map((move) => <li> {move} </li>)

        let items = this.props.items.map((item) => <li> {item.name} </li>)
        

        return (
        <div>
            <div>
                {pokemon.name}
            </div>
            <div>
                {pokemon.attack}
            </div>
            <div>
                {pokemon.defense}
            </div>
            <div>
                Moves
                <ul>
                    {moves}
                </ul>
            </div>
            <div>
                { pokemon.poke_type }
            </div>
            <div>
                Items
                <ul>
                    {items}
                </ul>
            </div>

        </div>
        )
    }
}
