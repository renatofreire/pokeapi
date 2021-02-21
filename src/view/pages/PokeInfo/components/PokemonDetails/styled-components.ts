import styled from "styled-components";

import tokens from "../../../../../constants/tokens";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BasicInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${tokens.spacing.outterSpace.small};
  background-color: ${tokens.colors.rawColors.white};
  border-radius: ${tokens.radius.small};
`;

export const PokemonName = styled.h2`
  font: ${tokens.fonts.title};
  color: ${tokens.colors.fontDefault};
  text-transform: capitalize;
`;

export const Text = styled.p`
  font: ${tokens.fonts.default};
  color: ${tokens.colors.rawColors.gray};
`;

export const Img = styled.img`
  width: 200px;
`;

export const DetailsInfo = styled.div`
  flex: 1;
  margin-left: ${tokens.spacing.space.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
