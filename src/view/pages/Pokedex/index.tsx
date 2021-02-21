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
    handleSeeMoreButtonClick,
  } = usePokedexScreen();

  return (
    <>
      {hasPokemon ? (
        <S.Container>
          {pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              number={pokemon.id}
              image={pokemon.image}
              negativeButtonAction={() => handleRemoveButtonClick(pokemon)}
              negativeButtonText="Remove"
              supportButtonAction={() => handleSeeMoreButtonClick(pokemon.name)}
              supportButtonText="See more"
            />
          ))}
        </S.Container>
      ) : (
        <ErrorMessage
          text="Oh no! You don't have any pokemon on your pokedex."
          buttonText="Search pokemon"
          buttonAction={handleSearchButtonClick}
        />
      )}
    </>
  );
};

export default Pokedex;
