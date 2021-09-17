const SET_SLIDER = 'gwent/slider/SET_SLIDER';
const INCREASE_COUNTER = 'gwent/slider/INCREASE_COUNTER';

const initialState = {
  counter: 0,
  active: false,
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/slider/SET_SLIDER':
      return {
        ...state,
        active: true,
      }
    case 'gwent/slider/INCREASE_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
        active: state.counter > 0 ? false : true,
      }
    default:
      return state
  }
}

export const setSlider = () => (
  { type: SET_SLIDER }
)

export const increaseCounter = () => (
  { type: INCREASE_COUNTER }
)

export default sliderReducer;