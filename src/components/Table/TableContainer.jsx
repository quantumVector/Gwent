import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteUserHandCard } from '../../redux/decksReducer';
import { playCard, setPower } from '../../redux/gameProcessReducer';
import Table from './Table';

const mapStateToProps = (state, side) => ({
  userMeleePower: state.gameProcess.userMeleePower,
  userRangedPower: state.gameProcess.userRangedPower,
  userSiegePower: state.gameProcess.userSiegePower,
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
    deleteUserHandCard: (cardId) => {
      dispatch(deleteUserHandCard(cardId));
    },
    setPower: () => {
      dispatch(setPower());
    }
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Table);