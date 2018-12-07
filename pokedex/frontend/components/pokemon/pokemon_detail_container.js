import { connect } from 'react-redux';
import { requestSinglePokemon } from "../../actions/pokemon_actions";
import PokemonDetailComponent from './pokemon_detail';
import { selectPokeItems } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
    let pokemon = state.entities.pokemon[ownProps.match.params.id];
    return {
        id: ownProps.match.params.id,
        pokemon,
        items: Object.values(state.entities.items)
    };
}



const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetailComponent);