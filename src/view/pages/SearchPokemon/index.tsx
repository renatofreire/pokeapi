import { PrimaryButton, SecondaryButton } from "../../components/Button";

import * as S from "./styled-components";

const SearchPokemon = () => {
  return (
    <S.SearchForm>
      <S.Label htmlFor="poke-input">Search pokemon by name or id:</S.Label>
      <S.Input id="poke-input" placeholder="Charizard" />
      <S.ButtonContainer>
        <PrimaryButton>Search</PrimaryButton>
        <SecondaryButton>Clear</SecondaryButton>
      </S.ButtonContainer>
    </S.SearchForm>
  );
};

export default SearchPokemon;
