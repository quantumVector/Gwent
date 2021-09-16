const SET_SLIDER = 'gwent/slider/SET_SLIDER';
const INCREASE_COUNTER = 'gwent/slider/INCREASE_COUNTER';
const HIDE_SLIDER = 'gwent/slider/HIDE_SLIDER';

const initialState = {
  sliderVisible: false,
  counter: 0,
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/slider/SET_SLIDER':
      return {
        ...state,
        sliderVisible: true,
      }
    case 'gwent/slider/INCREASE_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'gwent/slider/HIDE_SLIDER':
      return {
        ...state,
        sliderVisible: false,
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

export const hideSlider = () => (
  { type: HIDE_SLIDER }
)

export default sliderReducer;