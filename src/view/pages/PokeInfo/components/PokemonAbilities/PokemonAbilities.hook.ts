import { useReducer, useState } from "react";
import request from "../../../../../services/request";

interface usePokemonAbilitiesHook {
  selected: string;
  setSelected: (selected: string) => void;
  abilitiesState: AbilitiesState;
  requestAbilityShortEffect: (url: string) => void;
}

export interface AbilitiesState {
  isLoading: boolean;
  hasError: boolean;
  shortEffect: string;
}

enum AbilitiesAction {
  REQUEST = "request",
  RESOLVE = "resolve",
  FAIL = "fail",
}

const abilitiesInitialState = {
  isLoading: false,
  hasError: false,
  shortEffect: "",
};

export default function usePokemonAbilities(): usePokemonAbilitiesHook {
  const [selected, setSelected] = useState<string>("");

  function abilitiesReducer(state, action) {
    switch (action.type) {
      case AbilitiesAction.REQUEST:
        return { isLoading: true, hasError: false, shortEffect: "" };

      case AbilitiesAction.RESOLVE:
        return {
          isLoading: false,
          hasError: false,
          shortEffect: action.payload,
        };

      case AbilitiesAction.FAIL:
        return { isLoading: false, hasError: true, shortEffect: "" };

      default:
        return state;
    }
  }

  const [abilitiesState, abilitiesDispatch] = useReducer(
    abilitiesReducer,
    abilitiesInitialState
  );

  async function requestAbilityShortEffect(url: string) {
    abilitiesDispatch({ type: AbilitiesAction.REQUEST });
    try {
      const response = await request(url);
      const { effect_entries } = response;
      const ability = effect_entries.find((e) => {
        return e.language.name === "en";
      });
      console.log(ability);
      abilitiesDispatch({
        type: AbilitiesAction.RESOLVE,
        payload: ability.short_effect,
      });
    } catch (e) {
      abilitiesDispatch({ type: AbilitiesAction.FAIL });
    }
  }

  return {
    selected,
    setSelected,
    abilitiesState,
    requestAbilityShortEffect,
  };
}
