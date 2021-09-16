import { connect } from 'react-redux';
import { compose } from 'redux';
import Slider from './Slider';
import { hideSlider, increaseCounter } from '../../redux/sliderReducer';
import { replaceСard } from '../../redux/decksReducer';
import { modalControler } from '../../redux/modalReducer';


const mapStateToProps = (state) => ({
  move: state.deployment.move,
  decks: state.decks,
  counter: state.slider.counter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideSlider: () => {
      dispatch(hideSlider());
    },
    replaceСard: (cardId) => {
      dispatch(replaceСard(cardId));
    },
    showModal: (message) => {
      dispatch(modalControler(message));
    },
    increaseCounter: () => {
      dispatch(increaseCounter())
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Slider);