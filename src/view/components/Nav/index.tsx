import ROUTES from "../../../constants/routes";

import pokeball from "../../assets/pokeball.png";

import * as S from "./styled-components";

const Nav = () => {
  return (
    <S.Navigation>
      <S.Img src={pokeball} alt="" />

      <S.Link to={ROUTES.POKEDEX}>Pokedex</S.Link>
      <S.Link to={ROUTES.SEARCH_POKEMON}>Search Pokemon</S.Link>
    </S.Navigation>
  );
};

export default Nav;
