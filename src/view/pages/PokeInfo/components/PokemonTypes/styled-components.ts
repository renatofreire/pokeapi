import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import tokens from "../../../../../constants/tokens";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ListItem = styled.li`
  font: ${tokens.fonts.default};
`;

export const Link = styled(RouterLink)`
  display: inline-block;
  font: ${tokens.fonts.default};
  color: ${tokens.colors.fontDefault};
  padding: ${tokens.spacing.space.small} 0;
`;
