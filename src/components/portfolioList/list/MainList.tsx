import React from "react";
import * as S from "./style";
import { Search, ListItem } from "../..";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { useRecoilValue } from "recoil";
import { getPortListSelector } from "../../../modules/atom/portfolio";
import { searchValue } from "../../../modules/atom/portfolio/search/index";

const MainList = () => {
  const portfolioList = useRecoilValue(getPortListSelector);
  const searchContent = useRecoilValue(searchValue);

  console.log(searchContent.length);

  return (
    <S.MainListWrapper className="container">
      <Search />
      <S.ListWrapper>
        {portfolioList?.portfolio_list.length === 0 ? (
          <p className="list-not-comment">작성된 포트폴리오가 없습니다</p>
        ) : (
          <>
            {searchContent.length === 0 ? (
              ""
            ) : (
              <S.SearchContent>{searchContent}의 검색결과...</S.SearchContent>
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
