import styled from "styled-components";

import tokens from "../../../constants/tokens";

export const Card = styled.div`
  padding: ${tokens.spacing.innerSpace.small};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${tokens.colors.rawColors.pokeBlack};
  border-radius: ${tokens.radius.medium};
`;

export const Title = styled.p`
  font: ${tokens.fonts.default};
  font-weight: bold;
  margin-bottom: ${tokens.spacing.space.verySmall};
`;

export const PokeNumber = styled.p`
  font: ${tokens.fonts.default};
  color: ${tokens.colors.rawColors.pokeBlack};
`;

export const Img = styled.img`
  width: 150px;
  margin: ${tokens.spacing.outterSpace.small};
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${tokens.spacing.space.small};
`;
