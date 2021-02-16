import errorImage from "../../assets/pokeerror.png";

import { ActionButton } from "../Buttons";

import * as S from "./styled-components";

interface ErrorMessageProps {
  text: string;
  buttonText?: string;
  buttonAction?: () => void;
}

const ErrorMessage = ({
  text,
  buttonText,
  buttonAction,
}: ErrorMessageProps) => {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
      <S.Img src={errorImage} alt="" />

      {buttonAction && (
        <ActionButton onClick={buttonAction}>
          {buttonText || "Try again"}
        </ActionButton>
      )}
    </S.Container>
  );
};

export default ErrorMessage;
