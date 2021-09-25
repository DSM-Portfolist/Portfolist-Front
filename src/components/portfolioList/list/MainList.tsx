import React from "react";
import ListItem from "./ListItem";
import * as S from "./style";
import { list } from "./dummy.json";

const MainList = () => {
  return (
    <>
      <S.MainListWrapper>
        <S.ListWrapper>
          {list.map((list: any, index) => (
            <ListItem
              key={index}
              user={list.user}
              url={list.url}
              field={list.field}
              title={list.title}
              introduce={list.introduce}
              touching={list.touching}
              touched={list.touched}
            />
          ))}
        </S.ListWrapper>
      </S.MainListWrapper>
    </>
  );
};

export default MainList;