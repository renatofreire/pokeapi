import { useSelector } from "react-redux";
import { CgPokemon, CgSearch } from "react-icons/cg";

import ROUTES from "../../../constants/routes";
import pokeball from "../../assets/pokeball.png";

import { PokedexSelectors } from "../../../store/pokedex";

import * as S from "./styled-components";

const Nav = () => {
  const pokedexCounter = useSelector(PokedexSelectors.pokedexCounter);

  return (
    <S.Navigation>
      <S.Img src={pokeball} alt="" />

      <S.Link to={ROUTES.POKEDEX} activeClassName="activeRoute">
        <CgPokemon />
        <S.Text>Pokedex - ({pokedexCounter})</S.Text>
      </S.Link>
      <S.Link to={ROUTES.SEARCH_POKEMON} activeClassName="activeRoute">
        <CgSearch />
        <S.Text>Search Pokemon</S.Text>
      </S.Link>
    </S.Navigation>
  );
};

export default Nav;
