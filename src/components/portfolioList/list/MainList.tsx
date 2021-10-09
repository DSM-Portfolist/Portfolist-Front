import React from "react";
import * as S from "./style";
import { list } from "./dummy.json";
import { Search, ListItem } from "../..";

const MainList = () => {
  return (
    <>
      <S.MainListWrapper className="container">
        <Search />
        <S.ListWrapper>
          {list.map((list: any, index: number) => (
            <ListItem key={index} list={list} />
          ))}
        </S.ListWrapper>
      </S.MainListWrapper>
    </>
  );
};

export default MainList;
