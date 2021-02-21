import type { PokemonType } from "../../../../../store/search-pokemon";
import usePokemonType from "./PokemonType.hooks";

import InfoSection from "../../../../components/InfoSection";
import MessageLine from "../../../../components/MessageLine";

import * as S from "./styled-components";

interface PokemonTypesProps {
  pokemon: PokemonType;
}

const PokemonTypes = ({ pokemon }: PokemonTypesProps) => {
  const {
    selected,
    setSelected,
    typeState,
    requestPokemonByType,
  } = usePokemonType();

  function handleButtonClick(name, url) {
    setSelected(name);
    requestPokemonByType(url);
  }

  function handleClosePokemonList() {
    setSelected("");
  }

  const { isLoading, hasError, pokemonList } = typeState;
  const hasPokemonList = pokemonList.length > 0;

  return (
    <InfoSection
      title="Types"
      selected={selected}
      items={pokemon.types}
      handleItemClick={handleButtonClick}
      handleCloseAdditional={handleClosePokemonList}
    >
      {isLoading && <MessageLine text="Loading pokemon lis" type="loading" />}
      {hasError && (
        <MessageLine text="Error fetching pokemon list" type="error" />
      )}

      {hasPokemonList && (
        <S.List>
          {pokemonList.map(({ pokemon: { name } }) => (
            <S.ListItem>
              <S.Link to={`/infos/${name}`}>{name}</S.Link>
            </S.ListItem>
          ))}
        </S.List>
      )}
    </InfoSection>
  );
};

export default PokemonTypes;
