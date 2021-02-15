import { ActionButton, NegativeActionButton } from "../../components/Buttons";
import PokeCard from "../../components/PokeCard";

import * as S from "./styled-components";
import useSearchPokemonScreen from "./search-pokemon.hook";

const SearchPokemon = () => {
  const {
    inputValue,
    inputRef,
    isLoading,
    hasError,
    pokemon,
    handleInputChange,
    handleClearButtonClick,
    handleSearchButtonClick,
  } = useSearchPokemonScreen();

  return (
    <S.SearchForm>
      <S.Label htmlFor="poke-input">Search pokemon by name or id:</S.Label>
      <S.Input
        ref={inputRef}
        id="poke-input"
        placeholder="Charizard"
        value={inputValue}
        onChange={handleInputChange}
      />
      <S.ButtonContainer>
        <NegativeActionButton onClick={handleClearButtonClick}>
          Clear
        </NegativeActionButton>
        <ActionButton onClick={handleSearchButtonClick}>Search</ActionButton>
      </S.ButtonContainer>

      {isLoading && <p>isLoading</p>}
      {hasError && <p>hasError</p>}

      {pokemon && (
        <S.ResultContainer>
          <PokeCard
            name={pokemon.name}
            number={pokemon.id}
            image={pokemon.image}
          />
        </S.ResultContainer>
      )}
    </S.SearchForm>
  );
};

export default SearchPokemon;
