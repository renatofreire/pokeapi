import styled from "styled-components";

import tokens from "../../../constants/tokens";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 1em;
`;

export const Text = styled.p`
  font: ${tokens.fonts.default};
`;
