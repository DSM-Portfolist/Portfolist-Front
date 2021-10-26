import React from "react";
import * as S from "./style";
import { Search, ListItem } from "../..";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { useList } from "../../../util/api/portfolio/getList";

interface Props {
  searchValue: string;
  setSearchValue: any;
}

const MainList = ({ searchValue, setSearchValue }: Props) => {
  const { isLoading, data } = useList();

  return (
    <S.MainListWrapper className="container">
      <Search setSearchValue={setSearchValue} />
      <S.ListWrapper>
        {isLoading ? (
          <div>잠시만 기다려주세요</div>
        ) : (
          <>
            {searchValue.length === 0 ? (
              ""
            ) : (
              <S.SearchContent>{searchValue}의 검색결과...</S.SearchContent>
            )}

            <S.ListContent>
              {data?.portfolio_list.map((list: PortListType, index: number) => (
                <ListItem key={index} list={list} />
              ))}
            </S.ListContent>
          </>
        )}
      </S.ListWrapper>
    </S.MainListWrapper>
  );
};

export default MainList;
