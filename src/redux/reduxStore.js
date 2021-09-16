import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import decksReducer from './decksReducer';
import appReducer from './appReducer';
import modalReducer from './modalReducer';
import sliderReducer from './sliderReducer';

const reducers = combineReducers({
  app: appReducer,
  modal: modalReducer,
  slider: sliderReducer,
  decks: decksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

window.__store__ = store;

export default store;