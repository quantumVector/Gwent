import { setSlider } from "./sliderReducer";

const SET_START_MODAL = 'gwent/modal/SET_START_MODAL';
const HIDE_MODAL = 'gwent/modal/HIDE_MODAL';
const SHOW_MODAL = 'gwent/modal/SHOW_MODAL';

const initialState = {
  message: null,
  active: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/modal/SET_START_MODAL': {
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
    case 'gwent/modal/SHOW_MODAL': {
      return {
        ...state,
        message: action.message,
        active: true
      }
    }
    default:
      return state;
  }
}

export const setStartModal = (message) => (
  { type: SET_START_MODAL, message }
)

export const hideModal = () => (
  { type: HIDE_MODAL }
)

export const modalControler = (message) => (dispatch) => {
  dispatch(showModal(message));

  setTimeout(() => dispatch(hideModal()), 2000);
}

export const showModal = (message) => (
  { type: SHOW_MODAL, message }
)

export default modalReducer;