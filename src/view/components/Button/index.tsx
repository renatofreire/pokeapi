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

export const PrimaryButton = styled(Button)`
  background-color: ${tokens.colors.primaryButton};

  &:hover {
    background-color: ${tokens.colors.primaryButtonHover};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${tokens.colors.secondaryButton};

  &:hover {
    background-color: ${tokens.colors.secondaryButtonHover};
  }
`;
