import enemyDeck from "./decks/enemyDeck";
import userDeck from "./decks/userDeck";

const SET_SHUFFLED_DECKS = 'gwent/gameDeployment/SET_SHUFFLED_DECKS';
const SET_HANDS = 'gwent/gameDeployment/SET_HANDS';
const UPDATE_USER_CARDS = 'gwent/gameDeployment/UPDATE_USER_CARDS';

const initialState = {
  enemyDeck: enemyDeck,
  userDeck: userDeck,
  enemyHand: null,
  userHand: null,
};

const decksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/gameDeployment/SET_SHUFFLED_DECKS': {
      return {
        ...state,
        enemyDeck: action.enemyDeck,
        userDeck: action.userDeck,
      }
    }
    case 'gwent/gameDeployment/SET_HANDS': {
      return {
        ...state,
        enemyHand: [...state.enemyDeck.slice(-10)],
        userHand: [...state.userDeck.slice(-10)],
        enemyDeck: [...state.enemyDeck.reverse().slice(10).reverse()],
        userDeck: [...state.userDeck.reverse().slice(10).reverse()],
      }
    }
    case 'gwent/gameDeployment/UPDATE_USER_CARDS': {
      return {
        ...state,
        userHand: action.hand,
        userDeck: action.deck,
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
  const shuffledEnemyDeck = shuffle(enemyDeck);
  const shuffledUserDeck = shuffle(userDeck);

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

export const updateUserCards = (hand, deck) => (
  { type: UPDATE_USER_CARDS, hand, deck }
)

export default decksReducer;