import collectionEnemyCards from "./decks/enemyDeck";
import collectionUserCards from "./decks/userDeck";
import { setSelectedCard, unlockField } from "./gameProcessReducer";

const SET_SHUFFLED_DECKS = 'gwent/decks/SET_SHUFFLED_DECKS';
const SET_USER_DECK_NUMBER = 'gwent/decks/SET_USER_DECK_NUMBER';
const SET_ENEMY_DECK_NUMBER = 'gwent/decks/SET_ENEMY_DECK_NUMBER';
const SET_HANDS = 'gwent/decks/SET_HANDS';
const REPLACE_CARD = 'gwent/decks/REPLACE_CARD';

const initialState = {
  enemyDeck: [],
  userDeck: [],
  enemyHand: null,
  userHand: null,
  enemyDeckFace: collectionEnemyCards.face,
  enemyDeckNumber: 0,
  userDeckFace: collectionUserCards.face,
  userDeckNumber: 0,
};

const decksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/decks/SET_SHUFFLED_DECKS': {
      return {
        ...state,
        enemyDeck: action.enemyDeck,
        userDeck: action.userDeck,
      }
    }
    case 'gwent/decks/SET_USER_DECK_NUMBER': {
      return {
        ...state,
        userDeckNumber: state.userDeck.length,
      }
    }
    case 'gwent/decks/SET_ENEMY_DECK_NUMBER': {
      return {
        ...state,
        enemyDeckNumber: state.enemyDeck.length,
      }
    }
    case 'gwent/decks/SET_HANDS': {
      return {
        ...state,
        enemyHand: [...state.enemyDeck.slice(-10)],
        userHand: [...state.userDeck.slice(-10)],
        enemyDeck: [...state.enemyDeck.reverse().slice(10).reverse()],
        userDeck: [...state.userDeck.reverse().slice(10).reverse()],
      }
    }
    case 'gwent/decks/REPLACE_CARD': {
      const cardFromHand = state.userHand.find(card => card.id === action.cardId);
      const cloneUserDeck = JSON.parse(JSON.stringify(state.userDeck));
      const cardFromDeck = cloneUserDeck.pop();
      const cloneUserHand = JSON.parse(JSON.stringify(state.userHand));

      cloneUserHand.forEach(card => {
        if (card.id === cardFromHand.id) {
          card.title = cardFromDeck.title;
          card.power = cardFromDeck.power;
          card.type = cardFromDeck.type;
          card.ability = cardFromDeck.ability;
          card.img = cardFromDeck.img;
          card.id = cardFromDeck.id;
        }
      });

      cloneUserDeck.push(cardFromHand);

      return {
        ...state,
        userHand: cloneUserHand,
        userDeck: shuffle(cloneUserDeck),
      }
    }
    default:
      return state;
  }
}

export const setShuffledDecks = (enemyDeck, userDeck) => (
  { type: SET_SHUFFLED_DECKS, enemyDeck, userDeck }
)

export const setHands = () => (
  { type: SET_HANDS }
)

export const installDecks = () => (dispatch) => {
  const shuffledEnemyDeck = shuffle(collectionEnemyCards.cards);
  const shuffledUserDeck = shuffle(collectionUserCards.cards);

  dispatch(setShuffledDecks(shuffledEnemyDeck, shuffledUserDeck));
  dispatch(setUserDeckNumber());
  dispatch(setEnemyDeckNumber());
  dispatch(setHands());
}

const shuffle = (deck) => {
  let shuffledArray = deck;

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const selectCard = (cardId) => (dispatch) => {
  const selectedCard = collectionUserCards.cards.find(card => card.id === cardId);

  dispatch(setSelectedCard(selectedCard));
  dispatch(unlockField(selectedCard.type));
}

export const setUserDeckNumber = () => (
  { type: SET_USER_DECK_NUMBER }
)

export const setEnemyDeckNumber = () => (
  { type: SET_ENEMY_DECK_NUMBER }
)

export const replaceСard = (cardId) => (
  { type: REPLACE_CARD, cardId }
)

export default decksReducer;