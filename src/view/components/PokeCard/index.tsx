import image from "../../assets/pokeerror.png";
import { ActionButton, SupportButton } from "../../components/Button";

import * as S from "./styled-components";

const PokeCard = () => {
  return (
    <S.Card>
      <S.Title>Pikachu</S.Title>
      <S.PokeNumber>#33</S.PokeNumber>
      <S.Img src={image} alt="" />
      <S.ButtonContainer>
        <ActionButton>Save on Pokedex</ActionButton>

        <SupportButton>See more</SupportButton>
      </S.ButtonContainer>
    </S.Card>
  );
};

export default PokeCard;
