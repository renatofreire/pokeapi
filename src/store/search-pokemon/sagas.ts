import {} from "redux-saga";
import { takeLatest, call, put } from "redux-saga/effects";

import request from "../../services/request";

import { sanitizePokemonAPI } from "../utils/sanitize-api-response";

import actions, { SEARCH_POKEMON } from "./actions";

export function* handleSearchPokemonRequest(action: {
  type: string;
  payload: string;
}) {
  try {
    const pokemon = action.payload.toLowerCase();

    const response = yield call(
      request,
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );

    const sanitizedResponse = sanitizePokemonAPI(response);

    yield put(actions.searchPokemonResolve(sanitizedResponse));
  } catch (e) {
    yield put(actions.searchPokemonFail(e.message));
  }
}

export default function* sagas() {
  yield takeLatest(SEARCH_POKEMON.REQUEST, handleSearchPokemonRequest);
}
