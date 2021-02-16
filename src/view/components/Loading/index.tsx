import loadingImage from "../../assets/pokeloading.gif";
import * as S from "./styled-components";

interface LoadingProps {
  text: string;
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
      <S.Img src={loadingImage} alt="" />
    </S.Container>
  );
};

export default Loading;
