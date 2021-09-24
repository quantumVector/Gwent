import collectionEnemyCards from "./decks/enemyDeck";
import collectionUserCards from "./decks/userDeck";
import { setSelectedCard } from "./gameProcessReducer";

const SET_SHUFFLED_DECKS = 'gwent/decks/SET_SHUFFLED_DECKS';
const SET_HANDS = 'gwent/decks/SET_HANDS';
const REPLACE_CARD = 'gwent/decks/REPLACE_CARD';

const initialState = {
  enemyDeck: collectionEnemyCards,
  userDeck: collectionUserCards,
  enemyHand: null,
  userHand: null,
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
  const shuffledEnemyDeck = shuffle(collectionEnemyCards);
  const shuffledUserDeck = shuffle(collectionUserCards);

  dispatch(setShuffledDecks(shuffledEnemyDeck, shuffledUserDeck));
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

export const replaceСard = (cardId) => (
  { type: REPLACE_CARD, cardId }
)

export const selectCard = (cardId) => (dispatch) => {
  const selectedCard = collectionUserCards.find(card => card.id === cardId);

  dispatch(setSelectedCard(selectedCard));
}

export default decksReducer;