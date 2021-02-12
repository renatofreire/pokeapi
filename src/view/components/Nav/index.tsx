import { CgPokemon, CgSearch } from "react-icons/cg";

import ROUTES from "../../../constants/routes";
import pokeball from "../../assets/pokeball.png";

import * as S from "./styled-components";

const Nav = () => {
  return (
    <S.Navigation>
      <S.Img src={pokeball} alt="" />

      <S.Link to={ROUTES.POKEDEX} activeClassName="activeRoute">
        <CgPokemon />
        <S.Text>Pokedex</S.Text>
      </S.Link>
      <S.Link to={ROUTES.SEARCH_POKEMON} activeClassName="activeRoute">
        <CgSearch />
        <S.Text>Search Pokemon</S.Text>
      </S.Link>
    </S.Navigation>
  );
};

export default Nav;
