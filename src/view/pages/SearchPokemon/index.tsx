import { ActionButton, NegativeActionButton } from "../../components/Buttons";
import PokeCard from "../../components/PokeCard";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

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
    handleSaveButtonClick,
    handleSeeMoreButtonClick,
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

      <S.ResultContainer>
        {isLoading && <Loading text={`Searching pokemon ${inputValue}`} />}
        {hasError && (
          <ErrorMessage
            text="Pokemon not found"
            buttonAction={handleSearchButtonClick}
          />
        )}

        {pokemon && (
          <PokeCard
            name={pokemon.name}
            number={pokemon.id}
            image={pokemon.image}
            primaryButtonAction={handleSaveButtonClick}
            primaryButtonText="Save on Pokedex"
            supportButtonAction={handleSeeMoreButtonClick}
            supportButtonText="See more"
          />
        )}
      </S.ResultContainer>
    </S.SearchForm>
  );
};

export default SearchPokemon;
