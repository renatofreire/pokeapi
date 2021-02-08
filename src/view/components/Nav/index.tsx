import ROUTES from "../../../constants/routes";
import pokeball from "../../assets/pokeball.png";

import * as S from "./styled-components";

const Nav = () => {
  return (
    <S.Navigation>
      <S.Img src={pokeball} alt="" />

      <S.Link to={ROUTES.POKEDEX} activeStyle={S.activeStyle}>
        Pokedex
      </S.Link>
      <S.Link to={ROUTES.SEARCH_POKEMON} activeStyle={S.activeStyle}>
        Search Pokemon
      </S.Link>
    </S.Navigation>
  );
};

export default Nav;
