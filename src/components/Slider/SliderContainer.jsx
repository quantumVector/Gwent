import { connect } from 'react-redux';
import { compose } from 'redux';
import Slider from './Slider';
import { hideSlider, increaseNumberReplacedCards } from '../../redux/sliderReducer';
import { updateUserCards } from '../../redux/decksReducer';


const mapStateToProps = (state) => ({
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
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Slider);