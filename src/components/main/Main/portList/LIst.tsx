import React from "react";
import { Arrow } from "../../../../util/assets";
import ListItem from "./ListItem";
import * as S from "./style";
import { list } from "./dummy.json";

const List = () => {
  return (
    <div className="border-bottom">
      <S.ListWrapper>
        <S.GoWrapper>
          <p>portfolio</p>
          <button>
            <span>Go</span>
            <img src={Arrow} alt="화살표" />
          </button>
        </S.GoWrapper>
        <S.ListItemWrapper>
          {list.map((list, index) => (
            <ListItem
              key={index}
              title={list.title}
              content={list.content}
              id={list.id}
            />
          ))}
        </S.ListItemWrapper>
      </S.ListWrapper>
    </div>
  );
};

export default List;
