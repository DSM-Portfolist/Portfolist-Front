import React from "react";
import * as S from "./style";
import { Search, ListItem } from "../..";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { MAINURL } from "../../../util/api/index";
import { PortListType } from "../../../util/interface/portfolio/portListType";

interface Props {
  searchValue: string;
  setSearchValue: any;
}

const MainList = ({ searchValue, setSearchValue }: Props) => {
  const { isLoading, data } = useQuery("get-list", () =>
    axios(`${MAINURL}/portfolio/list?page=1&size=5&field=WEB`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "access_token_portfolist"
        )}`,
      },
    })
  );

  return (
    <>
      <S.MainListWrapper className="container">
        <Search setSearchValue={setSearchValue} />

        <S.ListWrapper>
          {isLoading ? (
            <div>잠시만 기다려주세요</div>
          ) : (
            <>
              {/*  검색결과가 없으면 */}
              {searchValue.length === 0 ? (
                ""
              ) : (
                <S.SearchContent>{searchValue}의 검색결과...</S.SearchContent>
              )}
              {/* 리스트 띄우기 */}
              <S.ListContent>
                {data?.data.portfolio_list.map(
                  (list: PortListType, index: number) => (
                    <ListItem key={index} list={list} />
                  )
                )}
              </S.ListContent>
            </>
          )}
        </S.ListWrapper>
      </S.MainListWrapper>
    </>
  );
};

export default MainList;
