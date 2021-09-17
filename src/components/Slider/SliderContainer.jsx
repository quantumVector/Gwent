import { connect } from 'react-redux';
import { compose } from 'redux';
import Slider from './Slider';
import { increaseCounter } from '../../redux/sliderReducer';
import { replaceСard } from '../../redux/decksReducer';
import { setModal } from '../../redux/modalReducer';

const mapStateToProps = (state) => ({
  move: state.app.move,
  decks: state.decks,
  active: state.slider.active,
  counter: state.slider.counter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    replaceСard: (cardId) => {
      dispatch(replaceСard(cardId));
    },
    setModal: (message) => {
      dispatch(setModal(message));
    },
    increaseCounter: () => {
      dispatch(increaseCounter())
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Slider);