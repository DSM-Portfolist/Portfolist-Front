import React from "react";
import ListItem from "./ListItem";
import * as S from "./style";

const MainList = () => {
  return (
    <>
      <S.MainListWrapper>
        <S.ListWrapper>
          <ListItem />
        </S.ListWrapper>
      </S.MainListWrapper>
    </>
  );
};

export default MainList;
