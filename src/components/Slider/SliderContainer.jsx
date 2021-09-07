import { connect } from 'react-redux';
import { compose } from 'redux';
import Slider from './Slider';
import { hideSlider, increaseNumberReplacedCards } from '../../redux/sliderReducer';
import { updateUserCards } from '../../redux/decksReducer';
import { modalControler } from '../../redux/modalReducer';


const mapStateToProps = (state) => ({
  move: state.deployment.move,
  decks: state.decks,
  replacedCardsNumber: state.slider.replacedCardsNumber,
});

const mapDispatchToProps = (dispatch) => {
  return {
    increaseNumberReplacedCards: () => {
      dispatch(increaseNumberReplacedCards());
    },
    hideSlider: () => {
      dispatch(hideSlider());
    },
    updateUserCards: (cards, deck) => {
      dispatch(updateUserCards(cards, deck));
    },
    showModal: (message) => {
      dispatch(modalControler(message));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Slider);