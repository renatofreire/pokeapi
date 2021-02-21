import * as S from "./styled-components";

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <S.Header>
      <S.Title>{title || "Poke API"}</S.Title>
    </S.Header>
  );
};

export default Header;
