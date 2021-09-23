const SET_MODAL = 'gwent/modal/SET_MODAL';
const HIDE_MODAL = 'gwent/modal/HIDE_MODAL';
const SET_SLIDER = 'gwent/slider/SET_SLIDER';
const INCREASE_COUNTER = 'gwent/slider/INCREASE_COUNTER';
const RESET_COUNTER = 'gwent/slider/RESET_COUNTER';

const initialState = {
  activeModalMessage: false,
  message: null,
  activeSlider: false,
  counter: 0,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/modal/SET_MODAL': {
      return {
        ...state,
        message: action.message,
        activeModalMessage: true
      }
    }
    case 'gwent/modal/HIDE_MODAL': {
      return {
        ...state,
        message: null,
        activeModalMessage: false
      }
    }
    case 'gwent/slider/SET_SLIDER':
      return {
        ...state,
        activeSlider: true,
      }
    case 'gwent/slider/INCREASE_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
        activeSlider: state.counter > 0 ? false : true,
      }
    case 'gwent/slider/RESET_COUNTER':
      return {
        ...state,
        counter: 0,
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

export const setSlider = () => (
  { type: SET_SLIDER }
)

export const increaseCounter = () => (
  { type: INCREASE_COUNTER }
)

export const resetCounter = () => (
  { type: RESET_COUNTER }
)

export const setModalMessageAndSlider = (message) => (dispatch) => {
  new Promise((resolve, reject) => {
    dispatch(setModal(message));
    resolve();
  })
    .then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          dispatch(hideModal());
          resolve();
        }, 3000);
      });
    })
    .then(() => {
      dispatch(setSlider());
    });
}

export const setModals = (messages) => (dispatch) => {
  new Promise((resolve, reject) => {
    dispatch(setModal(messages[0]));
    resolve();
  })
    .then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          dispatch(setModal(messages[1]));
          resolve();
        }, 3000);
      });
    })
    .then(() => {
      setTimeout(() => {
        dispatch(hideModal());
      }, 3000);
    });
}

export default modalReducer;