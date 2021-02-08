import styled from "styled-components";

import tokens from "../../../constants/tokens";

export const SearchForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font: ${tokens.fonts.default};
  margin-bottom: ${tokens.spacing.space.medium};
`;

export const Input = styled.input`
  margin-bottom: ${tokens.spacing.space.medium};
  padding: ${tokens.spacing.innerSpace.medium};
  font: ${tokens.fonts.default};
  background-color: ${tokens.colors.rawColors.white};
  border-radius: ${tokens.radius.small};
  border: none;
  outline: none;
  transition: box-shadow 0.5s;

  &:focus {
    box-shadow: 0px 0px 5px ${tokens.colors.rawColors.pokeBlack};
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
`;
