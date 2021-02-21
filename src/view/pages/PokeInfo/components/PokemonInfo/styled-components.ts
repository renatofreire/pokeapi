import styled from "styled-components";

import tokens from "../../../../../constants/tokens";

export const Container = styled.div``;

export const Title = styled.h3`
  font: ${tokens.fonts.sectionTitle};
  color: ${tokens.colors.rawColors.pokeBlack};
  margin-bottom: ${tokens.spacing.space.small};
`;

export const TextBold = styled.p`
  font: ${tokens.fonts.largeText};
  color: ${tokens.colors.rawColors.pokeBlack};
  font-weight: bold;
`;

export const Text = styled.p`
  font: ${tokens.fonts.default};
  color: ${tokens.colors.rawColors.gray};
`;

export const AttributesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${tokens.spacing.space.medium};
`;
