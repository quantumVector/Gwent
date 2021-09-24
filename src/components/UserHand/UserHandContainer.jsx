import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectCard } from '../../redux/decksReducer';
import UserHand from './UserHand';

const mapStateToProps = (state) => ({
  userHand: state.decks.userHand,
});


const mapDispatchToProps = (dispatch) => {
  return {
    selectCard: (card) => {
      dispatch(selectCard(card));
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(UserHand);