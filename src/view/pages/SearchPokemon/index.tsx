import { ActionButton, NegativeActionButton } from "../../components/Button";

import * as S from "./styled-components";

const SearchPokemon = () => {
  return (
    <S.SearchForm>
      <S.Label htmlFor="poke-input">Search pokemon by name or id:</S.Label>
      <S.Input id="poke-input" placeholder="Charizard" />
      <S.ButtonContainer>
        <NegativeActionButton>Clear</NegativeActionButton>
        <ActionButton>Search</ActionButton>
      </S.ButtonContainer>
    </S.SearchForm>
  );
};

export default SearchPokemon;
