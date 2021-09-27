import { connect } from 'react-redux';
import { compose } from 'redux';
import Side from './Side';

const mapStateToProps = (state, side) => ({
  userMeleeCards: state.gameProcess.userMeleeCards,
  userRangedCards: state.gameProcess.userRangedCards,
  userSiegeCards: state.gameProcess.userSiegeCards,
  ...side
});

export default compose(
  connect(mapStateToProps),
)(Side);