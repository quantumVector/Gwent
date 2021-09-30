import { connect } from 'react-redux';
import { compose } from 'redux';
import { playCard } from '../../redux/gameProcessReducer';
import Side from './Side';

const mapStateToProps = (state, side) => ({
  userMeleeCards: state.gameProcess.userMeleeCards,
  userRangedCards: state.gameProcess.userRangedCards,
  userSiegeCards: state.gameProcess.userSiegeCards,
  meleeFieldUnlocked: state.gameProcess.meleeFieldUnlocked,
  rangedFieldUnlocked: state.gameProcess.rangedFieldUnlocked,
  siegeFieldUnlocked: state.gameProcess.siegeFieldUnlocked,
  selectedCard: state.gameProcess.selectedCard,
  ...side
});

const mapDispatchToProps = (dispatch) => {
  return {
    playCard: (card, field) => {
      dispatch(playCard(card, field));
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Side);