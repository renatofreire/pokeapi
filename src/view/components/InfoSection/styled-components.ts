import styled, { css } from "styled-components";
import tokens from "../../../constants/tokens";

import { NegativeActionButton, SupportButton } from "../../components/Buttons";

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

export const AdditionalArea = styled.div`
  border-left: 2px solid ${tokens.colors.rawColors.pokeBlack};
  padding-left: ${tokens.spacing.space.small};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${tokens.colors.rawColors.pokeBlack};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: ${tokens.spacing.space.small};
  margin-left: -${tokens.spacing.space.small};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: ${tokens.colors.rawColors.pokeBlack};
    color: ${tokens.colors.rawColors.white};
  }
`;
