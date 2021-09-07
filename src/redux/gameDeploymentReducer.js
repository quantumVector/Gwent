import { installDecks } from "./decksReducer";
import { setModal } from "./modalReducer";

const DEPLOYMENT_SUCCESS = 'gwent/gameDeployment/DEPLOYMENT_SUCCESS';
const SET_MOVE = 'gwent/gameDeployment/SET_MOVE';

const initialState = {
  gameDeployed: false,
  move: null,
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

  dispatch(setMove(resultDraw));
  dispatch(setModal(resultDraw));
  dispatch(installDecks());
  dispatch(deploymentSuccess());
}

const draw = () => {
  const rand = 1 + Math.random() * (2 + 1 - 1);

  return Math.floor(rand) === 1 ? 'user' : 'enemy';
}

export default gameDeploymentReducer;