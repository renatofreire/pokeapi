import type { PokemonType } from "../../../../../store/search-pokemon";

import * as S from "./styled-components";
import usePokemonAbilitiesHooks from "./PokemonAbilities.hook";

import InfoSection from "../../../../components/InfoSection";
import MessageLine from "../../../../components/MessageLine";

interface PokemonAbilitiesProps {
  pokemon: PokemonType;
}

const PokemonAbilities = ({ pokemon }: PokemonAbilitiesProps) => {
  const {
    selected,
    setSelected,
    abilitiesState,
    requestAbilityShortEffect,
  } = usePokemonAbilitiesHooks();

  const { isLoading, hasError, shortEffect } = abilitiesState;

  function handleButtonClick(name: string, url: string) {
    setSelected(name);
    requestAbilityShortEffect(url);
  }

  function handleCloseShorEffect() {
    setSelected("");
  }

  return (
    <InfoSection
      title="Abilities"
      selected={selected}
      items={pokemon.abilities}
      handleItemClick={handleButtonClick}
      handleCloseAdditional={handleCloseShorEffect}
    >
      {selected && (
        <div>
          {isLoading && (
            <MessageLine text="Loading short effect" type="loading" />
          )}
          {hasError && (
            <MessageLine text="Error fetching short effect" type="error" />
          )}

          {shortEffect && (
            <>
              <S.TextBold>Short effetct:</S.TextBold>
              <S.Text>{shortEffect}</S.Text>
            </>
          )}
        </div>
      )}
    </InfoSection>
  );
};

export default PokemonAbilities;
