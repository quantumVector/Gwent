import { installDecks } from "./decksReducer";
import { setModal } from "./modalReducer";
import { setSlider } from "./sliderReducer";

const DEPLOYMENT_SUCCESS = 'gwent/deployment/DEPLOYMENT_SUCCESS';
const SET_MOVE = 'gwent/deployment/SET_MOVE';

const initialState = {
  deploymentSuccess: false,
  move: null,
};

const gameDeploymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gwent/deployment/DEPLOYMENT_SUCCESS': {
      return {
        ...state,
        deploymentSuccess: true,
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
  dispatch(setModal(message))
  dispatch(installDecks());
  dispatch(deploymentSuccess());

  setTimeout(() => dispatch(setSlider()), 2000);
}

const draw = () => {
  const rand = 1 + Math.random() * (2 + 1 - 1);

  return Math.floor(rand) === 1 ? 'user' : 'enemy';
}

export default gameDeploymentReducer;