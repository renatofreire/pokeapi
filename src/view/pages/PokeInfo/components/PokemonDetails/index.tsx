import type { PokemonType } from "../../../../../store/search-pokemon";
import PokemonInfo from "../PokemonInfo";

import * as S from "./styled-components";

interface PokemonDetailsProps {
  pokemon: PokemonType;
}

const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
  return (
    <S.Container>
      <S.BasicInfosContainer>
        <S.PokemonName>{pokemon.name}</S.PokemonName>
        <S.Text>#{pokemon.id}</S.Text>
        <S.Img src={pokemon.image} alt={pokemon.name} />
      </S.BasicInfosContainer>
      <S.DetailsInfo>
        <PokemonInfo
          title="Size"
          attributes={{ weight: pokemon.weight, height: pokemon.height }}
        ></PokemonInfo>

        <PokemonInfo
          title="Attributes"
          attributes={pokemon.stats}
        ></PokemonInfo>
      </S.DetailsInfo>
    </S.Container>
  );
};

export default PokemonDetails;
