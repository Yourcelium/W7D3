import { connect } from "react-redux";
import ItemDetailComponent from './item_detail'

const mapStateToProps = (state, ownProps) => ({
  item: state.entities.items[ownProps.match.params[id]]
})

const mapDispatchToProps = {
  
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetailComponent)