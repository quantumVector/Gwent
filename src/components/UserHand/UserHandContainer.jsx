import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectCard } from '../../redux/decksReducer';
import { removeSelectedCard } from '../../redux/gameProcessReducer';
import UserHand from './UserHand';

const mapStateToProps = (state) => ({
  userHand: state.decks.userHand,
  selectedCard: state.gameProcess.selectedCard,
});


const mapDispatchToProps = (dispatch) => {
  return {
    selectCard: (card) => {
      dispatch(selectCard(card));
    },
    removeSelectedCard: () => {
      dispatch(removeSelectedCard());
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(UserHand);