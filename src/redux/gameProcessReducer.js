const SET_SELECTED_CARD = 'gwent/gameProcess/SET_SELECTED_CARD';

const initialState = {
  selectionMod: false,
  selectedCard: null,
  userMeleeCards: [],
  userRangedCards: [],
  userSiegeCards: [],
  userMeleePower: 0,
  userRangedPower: 0,
  userSiegePower: 0,
  userTotalPower: 0,
};

const gameProcessReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/gameProcess/SET_SELECTION_MODE': {
      return {
        ...state,
        selectionMod: true
      }
    }
    case 'gwent/gameProcess/SET_SELECTED_CARD': {
      return {
        ...state,
        selectedCard: action.card
      }
    }
    case 'gwent/gameProcess/REMOVE_SELECTION_MODE': {
      return {
        ...state,
        selectionMod: false
      }
    }
    case 'gwent/gameProcess/REMOVE_SELECTED_CARD': {
      return {
        ...state,
        selectedCard: null
      }
    }
    default:
      return state;
  }
}

export const setSelectedCard = (card) => (
  { type: SET_SELECTED_CARD, card }
)


export default gameProcessReducer;