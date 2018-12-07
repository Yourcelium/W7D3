import { connect } from "react-redux";
import { requestAllPokemon } from "../../actions/pokemon_actions";
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndexComponent from './pokemon_index'


const mapStateToProps = (state) => ({
  pokemon: selectAllPokemon(state)
})

const mapDispatchToProps = {
  requestAllPokemon: requestAllPokemon
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonIndexComponent)