import styled from "styled-components";

import tokens from "../../../constants/tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${tokens.spacing.space.medium};
`;

export const Text = styled.p`
  font: ${tokens.fonts.sectionTitle};
  color: ${tokens.colors.fontDefault};
  text-align: center;
`;

export const Img = styled.img`
  width: 150px;
`;
