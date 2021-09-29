import { connect } from 'react-redux';
import { compose } from 'redux';
import { removeCard } from '../../redux/gameProcessReducer';
import SelectedCard from './SelectedCard';

const mapStateToProps = (state) => ({
  selectedCard: state.gameProcess.selectedCard,
});


const mapDispatchToProps = (dispatch) => {
  return {
    removeCard: () => {
      dispatch(removeCard());
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SelectedCard);