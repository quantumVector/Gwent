import { connect } from 'react-redux';
import { compose } from 'redux';
import UserDeck from './UserDeck';

const mapStateToProps = (state) => ({
  userDeckFace: state.decks.userDeckFace,
  userDeckNumber: state.decks.userDeckNumber,
});


const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(UserDeck);