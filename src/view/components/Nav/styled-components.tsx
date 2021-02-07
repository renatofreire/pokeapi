import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import tokens from "../../../constants/tokens";

export const Navigation = styled.nav`
  grid-area: nav;
  box-sizing: border-box;
  min-width: 270px;
  height: 100vh;
  padding: ${tokens.spacing.outterSpace.medium};
  background-color: ${tokens.colors.rawColors.pokeRed};
  display: flex;
  flex-direction: column;
`;

export const Link = styled(LinkRouter)`
  display: block;
  font: ${tokens.fonts.menu};
  text-decoration: none;
  color: ${tokens.colors.fontColorLight};
  margin: ${tokens.spacing.outterSpace.small};
  padding: ${tokens.spacing.outterSpace.small};

  &:hover {
    background-color: ${tokens.colors.bgLvl1};
    color: ${tokens.colors.rawColors.pokeRed};
  }
`;

export const Img = styled.img`
  width: 50%;
  align-self: center;
  margin-bottom: ${tokens.spacing.space.large};
`;
