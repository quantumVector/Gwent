const SET_SELECTED_CARD = 'gwent/gameProcess/SET_SELECTED_CARD';
const REMOVE_SELECTED_CARD = 'gwent/gameProcess/REMOVE_SELECTED_CARD';
const UNLOCK_FIELD_MELEE = 'gwent/gameProcess/UNLOCK_FIELD_MELEE';
const UNLOCK_FIELD_RANGED = 'gwent/gameProcess/UNLOCK_FIELD_RANGED';
const UNLOCK_FIELD_SIEGE = 'gwent/gameProcess/UNLOCK_FIELD_SIEGE';

const initialState = {
  selectionMod: false,
  selectedCard: null,
  meleeFieldUnlocked: false,
  userMeleeCards: [],
  rangedFieldUnlocked: false,
  userRangedCards: [],
  siegeFieldUnlocked: false,
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
    case 'gwent/gameProcess/UNLOCK_FIELD_MELEE': {
      return {
        ...state,
        meleeFieldUnlocked: true,
      }
    }
    case 'gwent/gameProcess/UNLOCK_FIELD_RANGED': {
      return {
        ...state,
        rangedFieldUnlocked: true,
      }
    }
    case 'gwent/gameProcess/UNLOCK_FIELD_SIEGE': {
      return {
        ...state,
        siegeFieldUnlocked: true,
      }
    }
    default:
      return state;
  }
}

export const unlockField = (type) => (dispatch) => {
  if (type === 'melee') dispatch(unlockFieldMelee());
  if (type === 'ranged') dispatch(unlockFieldRanged());
  if (type === 'siege') dispatch(unlockFieldSiege());
}

export const setSelectedCard = (card) => (
  { type: SET_SELECTED_CARD, card }
)

export const removeSelectedCard = () => (
  { type: REMOVE_SELECTED_CARD }
)

export const unlockFieldMelee = () => (
  { type: UNLOCK_FIELD_MELEE }
)

export const unlockFieldRanged = () => (
  { type: UNLOCK_FIELD_RANGED }
)

export const unlockFieldSiege = () => (
  { type: UNLOCK_FIELD_SIEGE }
)



export default gameProcessReducer;