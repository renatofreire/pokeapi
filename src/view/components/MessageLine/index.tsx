import styled from "styled-components";

import tokens from "../../../constants/tokens";
import errorImage from "../../assets/pokeerror.png";
import loadingImage from "../../assets/pokeloading.gif";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin-top: -4px;
  width: 48px;
`;

const Text = styled.p`
  font: ${tokens.fonts.default};
  font-weight: bold;
  color: ${tokens.colors.fontDefault};
`;

const MessageLine = ({ text, type }: { text: string; type: string }) => {
  const imgSrc = type === "error" ? errorImage : loadingImage;
  return (
    <Container>
      <Img src={imgSrc} alt="" />
      <Text>{text}</Text>
    </Container>
  );
};

export default MessageLine;
