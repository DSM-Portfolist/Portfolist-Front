import React from "react";
import * as S from "./style";
import { list } from "./dummy.json";
import { Search, ListItem } from "../..";
import { useQuery } from "react-query";
import axios from "axios";
import { MAINURL } from "../../../util/api/index";

const MainList = () => {
  const { data } = useQuery("get-list", () =>
    axios(`${MAINURL}/portfolio/list?page=1&size=5&field=WEB`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "access_token_portfolist"
        )}`,
      },
    })
  );

  console.log(data);

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
