import { EvolutionState } from "../../PokeInfo.hook";

import Loading from "../../../../components/Loading";
import ErrorMessage from "../../../../components/ErrorMessage";

import * as S from "./styled-components";

interface PokemonEvolutionProps {
  evolutionState: EvolutionState;
  requestEvolution: () => void;
}

function PokemonEvolution({
  evolutionState,
  requestEvolution,
}: PokemonEvolutionProps) {
  const { isLoading, hasError, evolutionChain } = evolutionState;

  const hasEvolutionChain = evolutionChain.length > 0;

  function printEvolutionNode(node) {
    if (!node) return null;
    return node.map(({ species, evolvesTo }) => (
      <S.PokemonNameContainer key={species}>
        <S.PokemonName to={`/infos/${species}`}>{species}</S.PokemonName>
        {evolvesTo && evolvesTo.map((a) => printEvolutionNode(a))}
      </S.PokemonNameContainer>
    ));
  }

  return (
    <S.Container>
      <S.Title>Evolution</S.Title>

      {isLoading && <Loading text="Loading evolution chain" />}
      {hasError && (
        <ErrorMessage
          text="Error fetching evolution chain"
          buttonAction={requestEvolution}
        />
      )}

      {hasEvolutionChain && (
        <S.EvolutionContainer>
          {printEvolutionNode(evolutionState.evolutionChain)}
        </S.EvolutionContainer>
      )}
    </S.Container>
  );
}

export default PokemonEvolution;
