import { connect } from 'react-redux';
import { compose } from 'redux';
import { hideModal, setModals, increaseCounter, resetCounter } from '../../redux/modalReducer';
import { replaceСard } from '../../redux/decksReducer';
import Modal from './Modal';

const mapStateToProps = (state) => ({
  activeModalMessage: state.modal.activeModalMessage,
  message: state.modal.message,
  activeSlider: state.modal.activeSlider,
  counter: state.modal.counter,
  move: state.app.move,
  decks: state.decks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {
      dispatch(hideModal());
    },
    setModals: (message) => {
      dispatch(setModals(message));
    },
    increaseCounter: () => {
      dispatch(increaseCounter())
    },
    resetCounter: () => {
      dispatch(resetCounter())
    },
    replaceСard: (cardId) => {
      dispatch(replaceСard(cardId));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Modal);
