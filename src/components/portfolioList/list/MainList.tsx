import { useEffect } from "react";
import * as S from "./style";
import { Search, ListItem } from "../..";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getPortListSelector } from "../../../modules/atom/portfolio";
import { useLocation } from "react-router";
import QueryString from "query-string";
import { searchValue } from "../../../modules/atom/portfolio/search";

const MainList = () => {
  const portfolioList = useRecoilValue(getPortListSelector);
  const setSearchText = useSetRecoilState(searchValue);

  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const query = queryData.query;

  useEffect(() => {
    setSearchText(query);
  }, [query, setSearchText]);

  return (
    <S.MainListWrapper className="container">
      <Search />
      <S.ListWrapper>
        {portfolioList?.length === 0 ? (
          <p className="list-not-comment">작성된 포트폴리오가 없습니다</p>
        ) : (
          <>
            {query && <S.SearchContent>{query}의 검색결과...</S.SearchContent>}

            <S.ListContent>
              {portfolioList?.map((list: PortListType, index: number) => (
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
