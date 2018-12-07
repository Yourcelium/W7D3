import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => {

    return (
        <li>
            <div className="poke-list-item">
                <Link to={`/pokemon/${pokemon.id}`} >
                    <span className='poke-list-name'>{ pokemon.name }</span>
                    <img className='poke-list-img' src={pokemon.image_url} alt={pokemon.name} />
                </Link>
            </div>
        </li>
    )
};


export default PokemonIndexItem