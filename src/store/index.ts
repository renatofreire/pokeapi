import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import searchPokemonReducer from "./search-pokemon";

import rootSaga from "./sagas";

const reducers = combineReducers({
  searchPokemonReducer,
});

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const reduxExtensionEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || null;

const composedMiddleware = compose(
  applyMiddleware(sagaMiddleware),
  reduxExtensionEnhancer()
);

const store = createStore(reducers, composedMiddleware);

sagaMiddleware.run(rootSaga);

export default store;
