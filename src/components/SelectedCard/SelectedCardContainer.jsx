import { connect } from 'react-redux';
import { compose } from 'redux';
import { removeSelectedCard } from '../../redux/gameProcessReducer';
import SelectedCard from './SelectedCard';

const mapStateToProps = (state) => ({
  selectedCard: state.gameProcess.selectedCard,
});


const mapDispatchToProps = (dispatch) => {
  return {
    removeSelectedCard: () => {
      dispatch(removeSelectedCard());
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SelectedCard);