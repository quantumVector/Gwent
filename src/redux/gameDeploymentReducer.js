import enemyDeck from "./decks/enemyDeck";
import userDeck from "./decks/userDeck";
import { hideModal, setFirstModal } from "./modalReducer";

const DEPLOYMENT_SUCCESS = 'gwent/gameDeployment/DEPLOYMENT_SUCCESS';
const SET_MOVE = 'gwent/gameDeployment/SET_MOVE';
const SET_SHUFFLED_DECKS = 'gwent/gameDeployment/SET_SHUFFLED_DECKS';
const SET_HANDS = 'gwent/gameDeployment/SET_HANDS'

const initialState = {
  enemyDeck: enemyDeck,
  userDeck: userDeck,
  gameDeployed: false,
  move: null,
  enemyHand: null,
  userHand: null,
};

const gameDeploymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/gameDeployment/DEPLOYMENT_SUCCESS': {
      return {
        ...state,
        gameDeployed: true,
      }
    }
    case 'gwent/gameDeployment/SET_MOVE': {
      return {
        ...state,
        move: action.move,
      }
    }
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
    default:
      return state;
  }
}

export const deploymentSuccess = () => (
  { type: DEPLOYMENT_SUCCESS }
)

export const setMove = (move) => (
  { type: SET_MOVE, move }
)

export const setShuffledDecks = (enemyDeck, userDeck) => (
  { type: SET_SHUFFLED_DECKS, enemyDeck, userDeck }
)

export const setHands = () => (
  { type: SET_HANDS }
)

export const deployGame = () => (dispatch) => {
  const resultDraw = draw();

  dispatch(setMove(resultDraw));
  setModal(resultDraw, dispatch);
  shuffleDecks(dispatch);
  dispatch(setHands());
  dispatch(deploymentSuccess());
}

const draw = () => {
  const rand = 1 + Math.random() * (2 + 1 - 1);

  return Math.floor(rand) === 1 ? 'user' : 'enemy';
}

const setModal = (resultDraw, dispatch) => {
  if (resultDraw === 'user') dispatch(setFirstModal('Вы делаете ход первым'));
  if (resultDraw === 'enemy') dispatch(setFirstModal('Противник ходит первым'));

  setTimeout(() => {
    dispatch(hideModal());
  }, 2000);
}

const shuffleDecks = (dispatch) => {
  const shuffledEnemyDeck = shuffle(enemyDeck);
  const shuffledUserDeck = shuffle(userDeck);

  dispatch(setShuffledDecks(shuffledEnemyDeck, shuffledUserDeck));
}

const shuffle = (deck) => {
  let shuffledArray = deck;

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export default gameDeploymentReducer;