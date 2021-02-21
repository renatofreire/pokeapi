import styled, { css } from "styled-components";
import tokens from "../../../../../constants/tokens";

export const Text = styled.p`
  font: ${tokens.fonts.default};
  color: ${tokens.colors.fontDefault};
  margin-bottom: ${tokens.spacing.space.small};

  & span {
    font-weight: bold;
  }
`;

export const TextBold = styled(Text)`
  font-weight: bold;
`;
