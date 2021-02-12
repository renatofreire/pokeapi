import { ActionButton, NegativeActionButton } from "../../components/Buttons";
import PokeCard from "../../components/PokeCard";
import image from "../../assets/pokeerror.png";

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

      <S.ResultContainer>
        <PokeCard name="Pikachu" number="33" image={image} />
      </S.ResultContainer>
    </S.SearchForm>
  );
};

export default SearchPokemon;
