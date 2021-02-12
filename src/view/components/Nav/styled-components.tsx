import styled from "styled-components";
import { NavLink } from "react-router-dom";

import tokens from "../../../constants/tokens";

export const Navigation = styled.nav`
  grid-area: nav;
  box-sizing: border-box;
  width: 280px;
  height: 100vh;
  padding: ${tokens.spacing.outterSpace.small};
  background-color: ${tokens.colors.rawColors.pokeRed};
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font: ${tokens.fonts.menu};
  text-decoration: none;
  color: ${tokens.colors.fontColorLight};
  margin: ${tokens.spacing.outterSpace.small};
  padding: ${tokens.spacing.outterSpace.small};

  &:hover {
    background-color: ${tokens.colors.bgLvl1};
    color: ${tokens.colors.rawColors.pokeRed};
  }

  &.activeRoute {
    border-left: 3px solid ${tokens.colors.rawColors.white};

    @media (max-width: 1000px) {
      border-left: none;
      background-color: ${tokens.colors.rawColors.pokeBlack};
    }
  }

  @media (max-width: 1000px) {
    flex: 1;
    justify-content: center;
    flex-direction: column;
    margin: 0;
  }
`;

export const Text = styled.span`
  margin-left: ${tokens.spacing.space.small};

  @media (max-width: 1000px) {
    font-size: 0.5em;
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 50%;
  align-self: center;
  margin-bottom: ${tokens.spacing.space.large};

  @media (max-width: 1000px) {
    display: none;
  }
`;
