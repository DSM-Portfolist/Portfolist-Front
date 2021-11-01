import React from "react";
import * as S from "./style";
import { Search, ListItem } from "../..";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { useRecoilValue } from "recoil";
import { getPortListSelector } from "../../../modules/atom/portfolio";

interface Props {
  searchValue: string;
  setSearchValue: any;
}

const MainList = ({ searchValue, setSearchValue }: Props) => {
  const portfolioList = useRecoilValue(getPortListSelector);

  return (
    <S.MainListWrapper className="container">
      <Search setSearchValue={setSearchValue} />
      <S.ListWrapper>
        {portfolioList?.portfolio_list.length === 0 ? (
          <div>작성된 포트폴리오가 없습니다</div>
        ) : (
          <>
            {searchValue.length === 0 ? (
              ""
            ) : (
              <S.SearchContent>{searchValue}의 검색결과...</S.SearchContent>
            )}

            <S.ListContent>
              {portfolioList?.portfolio_list.map(
                (list: PortListType, index: number) => (
                  <ListItem key={index} list={list} />
                )
              )}
            </S.ListContent>
          </>
        )}
      </S.ListWrapper>
    </S.MainListWrapper>
  );
};

export default MainList;
