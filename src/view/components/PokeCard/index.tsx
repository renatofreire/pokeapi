import { ActionButton, SupportButton } from "../../components/Buttons";

import * as S from "./styled-components";

interface PokeCardProps {
  name: string;
  number: string;
  image: string;
}

const PokeCard = ({ name, number, image }: PokeCardProps) => {
  return (
    <S.Card>
      <S.Title>{name}</S.Title>
      <S.PokeNumber>#{number}</S.PokeNumber>
      <S.Img src={image} alt={`${name} image`} />
      <S.ButtonContainer>
        <ActionButton>Save on Pokedex</ActionButton>

        <SupportButton>See more</SupportButton>
      </S.ButtonContainer>
    </S.Card>
  );
};

export default PokeCard;
