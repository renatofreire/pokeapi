import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import tokens from "../../../../../constants/tokens";

export const Container = styled.div`
  margin-top: ${tokens.spacing.space.large};
`;

export const Title = styled.h3`
  font: ${tokens.fonts.sectionTitle};
  color: ${tokens.colors.rawColors.pokeBlack};
  margin-bottom: ${tokens.spacing.space.small};
`;

export const ListContainer = styled.ul``;

const selectedStyled = css`
  &:before {
    content: "»";
    position: absolute;
  }
`;

export const ListItem = styled.li<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: ${tokens.spacing.space.small};
  margin-left: ${tokens.spacing.space.small};
  font: ${tokens.fonts.default};
  color: ${tokens.colors.fontDefault};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  ${({ selected }) => selected && selectedStyled};
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  margin-left: ${tokens.spacing.space.small};
`;

export const EvolutionContainer = styled.div`
  display: inline-block;
`;

export const PokemonNameContainer = styled.div`
  margin-left: ${tokens.spacing.space.verySmall};
`;

export const PokemonName = styled(Link)`
  display: block;
  font: ${tokens.fonts.default};
  color: ${tokens.colors.fontDefault};
  border-left: 1px solid ${tokens.colors.rawColors.pokeBlack};
  border-bottom: 1px solid ${tokens.colors.rawColors.pokeBlack};
  padding: ${tokens.spacing.space.small};
`;
