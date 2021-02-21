import * as S from "./styled-components";

import { CgClose } from "react-icons/cg";

const InfoSection = ({
  title,
  selected,
  items,
  handleItemClick,
  handleCloseAdditional,
  children,
}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ListContainer>
        {items.map(({ name, url }) => (
          <S.ListItem key={name} selected={selected === name}>
            <S.Button
              title={`click to load more information`}
              onClick={() => handleItemClick(name, url)}
            >
              {name}
            </S.Button>
          </S.ListItem>
        ))}
      </S.ListContainer>
      {selected && (
        <S.AdditionalArea>
          <S.CloseButton title="close" onClick={handleCloseAdditional}>
            <CgClose />
          </S.CloseButton>
          {children}
        </S.AdditionalArea>
      )}
    </S.Container>
  );
};

export default InfoSection;
