import {
  ActionButton,
  NegativeActionButton,
  SupportButton,
} from "../../components/Buttons";

import * as S from "./styled-components";

interface PokeCardProps {
  name: string;
  number: number;
  image: string;
  primaryButtonAction?: () => void;
  primaryButtonText?: string;
  negativeButtonAction?: () => void;
  negativeButtonText?: string;
  supportButtonAction?: () => void;
  supportButtonText?: string;
}

const PokeCard = ({
  name,
  number,
  image,
  primaryButtonAction,
  primaryButtonText,
  negativeButtonAction,
  negativeButtonText,
  supportButtonAction,
  supportButtonText,
}: PokeCardProps) => {
  return (
    <S.Card>
      <S.Title>{name}</S.Title>
      <S.PokeNumber>#{number}</S.PokeNumber>
      <S.Img src={image} alt={`${name} image`} />
      <S.ButtonContainer>
        {primaryButtonAction && (
          <ActionButton onClick={primaryButtonAction}>
            {primaryButtonText}
          </ActionButton>
        )}
        {supportButtonAction && (
          <SupportButton onClick={supportButtonAction}>
            {supportButtonText}
          </SupportButton>
        )}
        {negativeButtonAction && (
          <NegativeActionButton onClick={negativeButtonAction}>
            {negativeButtonText}
          </NegativeActionButton>
        )}
      </S.ButtonContainer>
    </S.Card>
  );
};

export default PokeCard;
