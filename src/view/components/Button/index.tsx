import styled from "styled-components";

import tokens from "../../../constants/tokens";

export const Button = styled.button`
  flex: 1;
  background-color: none;
  border: none;
  font: ${tokens.fonts.default};
  font-weight: bold;
  padding: ${tokens.spacing.innerSpace.medium};
  color: ${tokens.colors.rawColors.white};
  cursor: pointer;
  border-radius: ${tokens.radius.small};
  outline: none;

  &:focus {
    box-shadow: 0px 0px 5px ${tokens.colors.rawColors.pokeBlack};
  }
`;

export const ActionButton = styled(Button)`
  background-color: ${tokens.colors.actionButton};

  &:hover {
    background-color: ${tokens.colors.actionButtonHover};
  }
`;

export const NegativeActionButton = styled(Button)`
  background-color: ${tokens.colors.negativeActionButton};

  &:hover {
    background-color: ${tokens.colors.negativeActionButtonHover};
  }
`;

export const SupportButton = styled(Button)`
  background-color: ${tokens.colors.supportButton};

  &:hover {
    background-color: ${tokens.colors.supportButtonHover};
  }
`;
