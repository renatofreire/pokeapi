import styled from "styled-components";

import tokens from "../../../constants/tokens";

export const Header = styled.header`
  grid-area: header;
  background-color: ${tokens.colors.bgLvl0};
  padding: ${tokens.spacing.innerSpace.medium};
`;

export const Title = styled.h1`
  font: ${tokens.fonts.title};
  color: ${tokens.colors.fontColorLight};
`;
