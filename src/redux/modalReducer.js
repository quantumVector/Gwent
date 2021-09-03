const SET_FIRST_MODAL = 'gwent/modal/SET_FIRST_MODAL';
const HIDE_MODAL = 'gwent/modal/HIDE_MODAL';

const initialState = {
  modalMessage: null,
  modalVisible: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/modal/SET_FIRST_MODAL': {
      return {
        ...state,
        modalMessage: action.message,
        modalVisible: true
      }
    }
    case 'gwent/modal/HIDE_MODAL': {
      return {
        ...state,
        modalMessage: null,
        modalVisible: false
      }
    }
    default:
      return state;
  }
}

export const setFirstModal = (message) => (
  { type: SET_FIRST_MODAL, message }
)

export const hideModal = () => (
  { type: HIDE_MODAL }
)

export default modalReducer;