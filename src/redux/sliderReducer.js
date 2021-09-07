const SET_SLIDER = 'gwent/slider/SET_SLIDER';
const INCREASE_NUMBER_REPLACED_CARDS = 'gwent/slider/INCREASE_NUMBER_REPLACED_CARDS';
const HIDE_SLIDER = 'gwent/slider/HIDE_SLIDER';

const initialState = {
  sliderVisible: false,
  replacedCardsNumber: 0,
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/slider/SET_SLIDER':
      return {
        ...state,
        sliderVisible: true,
      }
    case 'gwent/slider/INCREASE_NUMBER_REPLACED_CARDS':
      console.log('here')
      return {
        ...state,
        replacedCardsNumber: state.replacedCardsNumber + 1,
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

export const increaseNumberReplacedCards = () => (
  { type: INCREASE_NUMBER_REPLACED_CARDS }
)

export const hideSlider = () => (
  { type: HIDE_SLIDER }
)

export default sliderReducer;