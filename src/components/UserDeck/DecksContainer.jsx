import { connect } from 'react-redux';
import { compose } from 'redux';
import Decks from './Decks';

const mapStateToProps = (state, side) => ({
  userDeckFace: state.decks.userDeckFace,
  userDeckNumber: state.decks.userDeckNumber,
  enemyDeckFace: state.decks.enemyDeckFace,
  enemyDeckNumber: state.decks.enemyDeckNumber,
  ...side
});

export default compose(
  connect(mapStateToProps),
)(Decks);