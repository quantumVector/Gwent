import { connect } from 'react-redux';
import { compose } from 'redux';
import TotalPower from './TotalPower';

const mapStateToProps = (state) => ({
  userTotalPower: state.gameProcess.userTotalPower,
});

export default compose(
  connect(mapStateToProps),
)(TotalPower);