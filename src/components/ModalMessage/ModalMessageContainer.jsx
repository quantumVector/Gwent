import { connect } from 'react-redux';
import { compose } from 'redux';
import ModalMessage from './ModalMessage';
import { hideModal } from '../../redux/modalReducer';

const mapStateToProps = (state) => ({
  active: state.modal.active,
  message: state.modal.message,
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {
      dispatch(hideModal());
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ModalMessage);