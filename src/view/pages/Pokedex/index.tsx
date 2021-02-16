import PokemonCard from "../../components/PokeCard";

import * as S from "./styled-components";
import usePokedexScreen from "./pokedex-hook";
import ErrorMessage from "../../components/ErrorMessage";

const Pokedex = () => {
  const {
    pokemonList,
    hasPokemon,
    handleRemoveButtonClick,
    handleSearchButtonClick,
  } = usePokedexScreen();

  return (
    <>
      {hasPokemon ? (
        <S.Container>
          {pokemonList.map((pokemon) => (
            <PokemonCard
              name={pokemon.name}
              number={pokemon.id}
              image={pokemon.image}
              negativeButtonAction={() => handleRemoveButtonClick(pokemon)}
              negativeButtonText="Remove"
            />
          ))}
        </S.Container>
      ) : (
        <ErrorMessage
          text="Oh no! You don't have any pokemon on your pokedex."
          buttonText="search pokemon"
          buttonAction={handleSearchButtonClick}
        />
      )}
    </>
  );
};

export default Pokedex;
