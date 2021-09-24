import { connect } from 'react-redux';
import { compose } from 'redux';
import SelectedCard from './SelectedCard';

const mapStateToProps = (state) => ({
  selectedCard: state.gameProcess.selectedCard,
});


const mapDispatchToProps = (dispatch) => {
  return {};
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SelectedCard);