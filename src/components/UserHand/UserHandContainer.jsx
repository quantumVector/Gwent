import { connect } from 'react-redux';
import { compose } from 'redux';
import UserHand from './UserHand';

const mapStateToProps = (state) => ({
  userHand: state.decks.userHand,
});


const mapDispatchToProps = (dispatch) => {
  return {};
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(UserHand);