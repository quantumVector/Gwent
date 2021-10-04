const SET_SELECTED_CARD = 'gwent/gameProcess/SET_SELECTED_CARD';
const REMOVE_SELECTED_CARD = 'gwent/gameProcess/REMOVE_SELECTED_CARD';
const UNLOCK_FIELD_MELEE = 'gwent/gameProcess/UNLOCK_FIELD_MELEE';
const UNLOCK_FIELD_RANGED = 'gwent/gameProcess/UNLOCK_FIELD_RANGED';
const UNLOCK_FIELD_SIEGE = 'gwent/gameProcess/UNLOCK_FIELD_SIEGE';
const BLOCK_ALL_FIELDS = 'gwent/gameProcess/BLOCK_ALL_FIELDS';
const SET_PLAYED_MELEE_CARD = 'gwent/gameProcess/SET_PLAYED_MELEE_CARD';
const SET_PLAYED_RANGED_CARD = 'gwent/gameProcess/SET_PLAYED_RANGED_CARD';
const SET_PLAYED_SIEGE_CARD = 'gwent/gameProcess/SET_PLAYED_SIEGE_CARD';

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
    case 'gwent/gameProcess/BLOCK_ALL_FIELDS': {
      return {
        ...state,
        meleeFieldUnlocked: false,
        rangedFieldUnlocked: false,
        siegeFieldUnlocked: false,
      }
    }
    case 'gwent/gameProcess/SET_PLAYED_MELEE_CARD': {
      const cloneCards = setCloneCards(state.userMeleeCards, action.card);
      const sumPower = cloneCards.reduce((sum, current) => sum + current.power, 0);

      return {
        ...state,
        userMeleeCards: cloneCards,
        userMeleePower: sumPower,
      }
    }
    case 'gwent/gameProcess/SET_PLAYED_RANGED_CARD': {
      const cloneCards = setCloneCards(state.userRangedCards, action.card);
      const sumPower = cloneCards.reduce((sum, current) => sum + current.power, 0);

      return {
        ...state,
        userRangedCards: cloneCards,
        userRangedPower: sumPower,
      }
    }
    case 'gwent/gameProcess/SET_PLAYED_SIEGE_CARD': {
      const cloneCards = setCloneCards(state.userSiegeCards, action.card);
      const sumPower = cloneCards.reduce((sum, current) => sum + current.power, 0);

      return {
        ...state,
        userSiegeCards: cloneCards,
        userSiegePower: sumPower,
      }
    }
    default:
      return state;
  }
}

const setCloneCards = (cards, selectedCard) => {
  const cloneCards = JSON.parse(JSON.stringify(cards));
  cloneCards.push(selectedCard);
  return cloneCards;
}

export const unlockField = (type) => (dispatch) => {
  if (type === 'melee') dispatch(unlockFieldMelee());
  if (type === 'ranged') dispatch(unlockFieldRanged());
  if (type === 'siege') dispatch(unlockFieldSiege());
}

export const removeCard = () => (dispatch) => {
  dispatch(blockAllFields());
  dispatch(removeSelectedCard());
}

export const playCard = (card, field) => (dispatch) => {
  if (field === 'melee') dispatch(setPlayedMeleeCard(card));
  if (field === 'ranged') dispatch(setPlayedRangedCard(card));
  if (field === 'siege') dispatch(setPlayedSiegeCard(card));

  dispatch(removeCard());
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

export const blockAllFields = () => (
  { type: BLOCK_ALL_FIELDS }
)

export const setPlayedMeleeCard = (card) => (
  { type: SET_PLAYED_MELEE_CARD, card }
)

export const setPlayedRangedCard = (card) => (
  { type: SET_PLAYED_RANGED_CARD, card }
)

export const setPlayedSiegeCard = (card) => (
  { type: SET_PLAYED_SIEGE_CARD, card }
)

export default gameProcessReducer;