import * as S from "./styled-components";

interface PokemonInfoProps {
  title: string;
  attributes: { [key: string]: number };
}

const PokemonInfo = ({ title, attributes }: PokemonInfoProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.AttributesContainer>
        {Object.keys(attributes).map((key) => {
          return (
            <div key={key}>
              <S.Text>{key}</S.Text>
              <S.TextBold>{attributes[key]}</S.TextBold>
            </div>
          );
        })}
      </S.AttributesContainer>
    </S.Container>
  );
};

export default PokemonInfo;
