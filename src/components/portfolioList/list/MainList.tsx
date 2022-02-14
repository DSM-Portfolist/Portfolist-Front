import { useEffect } from "react";
import * as S from "./style";
import { Search, ListItem } from "../..";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useLocation } from "react-router";
import QueryString from "query-string";
import {
  searchValue,
  sortValue,
  useFieldValue,
} from "../../../modules/atom/portfolio/search";
import { useQuery } from "react-query";
import { getPortfolioList } from "../../../util/api/portfolio/portfolio";
import { BarLoader } from "react-spinners";
import { mainColor } from "../../../util/css/color/color";

const MainList = () => {
  const setSearchText = useSetRecoilState(searchValue);
  const field = useRecoilValue(useFieldValue);
  const search = useRecoilValue(searchValue);
  const sort = useRecoilValue(sortValue);

  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const query = queryData.query;

  const { data: portfolioList, isLoading } = useQuery(
    ["portfolio_list", field, sort, search],
    () => getPortfolioList(field, sort, search, "title"),
    {
      enabled: !!field || !!sort || !!search,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  useEffect(() => {
    setSearchText(query);
  }, [query, setSearchText]);

  if (isLoading)
    return <BarLoader color={mainColor} height="4px" width="100px" />;

  return (
    <S.MainListWrapper className="container">
      <Search />
      <S.ListWrapper>
        {portfolioList?.data?.portfolio_list.length === 0 ? (
          <p className="list-not-comment">작성된 포트폴리오가 없습니다</p>
        ) : (
          <>
            {query && <S.SearchContent>{query}의 검색결과...</S.SearchContent>}

            <S.ListContent>
              {portfolioList?.data?.portfolio_list.map(
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
