import { installDecks } from "./decksReducer";
import { setStartModal } from "./modalReducer";

const DEPLOYMENT_SUCCESS = 'gwent/deployment/DEPLOYMENT_SUCCESS';
const SET_MOVE = 'gwent/deployment/SET_MOVE';

const initialState = {
  gameDeployed: false,
  move: null,
};

const gameDeploymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/deployment/DEPLOYMENT_SUCCESS': {
      return {
        ...state,
        gameDeployed: true,
      }
    }
    case 'gwent/deployment/SET_MOVE': {
      return {
        ...state,
        move: action.move,
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

export const deployGame = () => (dispatch) => {
  const resultDraw = draw();
  let message;

  if (resultDraw === 'user') message='Вы делаете ход первым';
  if (resultDraw === 'enemy') message='Противник ходит первым';

  dispatch(setMove(resultDraw));
  dispatch(setStartModal(message))
  dispatch(installDecks());
  dispatch(deploymentSuccess());
}

const draw = () => {
  const rand = 1 + Math.random() * (2 + 1 - 1);

  return Math.floor(rand) === 1 ? 'user' : 'enemy';
}

export default gameDeploymentReducer;