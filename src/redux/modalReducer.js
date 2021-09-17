const SET_MODAL = 'gwent/modal/SET_MODAL';
const HIDE_MODAL = 'gwent/modal/HIDE_MODAL';

const initialState = {
  message: null,
  active: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/modal/SET_MODAL': {
      return {
        ...state,
        message: action.message,
        active: true
      }
    }
    case 'gwent/modal/HIDE_MODAL': {
      return {
        ...state,
        message: null,
        active: false
      }
    }
    default:
      return state;
  }
}

export const setModal = (message) => (
  { type: SET_MODAL, message }
)

export const hideModal = () => (
  { type: HIDE_MODAL }
)

export default modalReducer;