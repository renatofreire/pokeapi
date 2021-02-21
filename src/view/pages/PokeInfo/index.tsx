import { useLocation } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";

import Loading from "../../components/Loading";
import { getLastSegment } from "../../helpers/url";

import usePokeInfoScreen from "./PokeInfo.hook";

import PokemonDetails from "./components/PokemonDetails";
import PokemonTypes from "./components/PokemonTypes";
import PokemonAbilities from "./components/PokemonAbilities";
import PokemonEvolution from "./components/PokemonEvolution";

const PokeInfos = () => {
  const { pathname } = useLocation();
  const name = getLastSegment(pathname);

  const {
    pokemon,
    isLoading,
    hasError,
    evolutionState,
    requestEvolution,
    handleTryAgainButtonClick,
  } = usePokeInfoScreen(name);

  return (
    <div>
      {isLoading && <Loading text="Loading pokemon infos" />}
      {hasError && (
        <ErrorMessage
          text="Error trying to load pokemon infos"
          buttonAction={handleTryAgainButtonClick}
          buttonText="Try again"
        />
      )}

      {pokemon && (
        <>
          <PokemonDetails pokemon={pokemon} />
          <PokemonTypes pokemon={pokemon} />
          <PokemonAbilities pokemon={pokemon} />
          <PokemonEvolution
            evolutionState={evolutionState}
            requestEvolution={requestEvolution}
          />
        </>
      )}
    </div>
  );
};

export default PokeInfos;
