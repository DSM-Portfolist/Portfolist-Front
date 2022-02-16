import { useCallback, useEffect, useState } from "react";
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

  const [articles, setArticles] = useState<any>([]);
  const [page, setPage] = useState<number>(0);

  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const query = queryData.query;

  const { data: portfolioList, isLoading } = useQuery(
    ["portfolio_list", field, sort, search, page],
    () => getPortfolioList(field, sort, search, "title", page),
    {
      enabled: !!field || !!sort || !!search || page,
      cacheTime: Infinity,
      staleTime: Infinity,
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setArticles(articles.concat(portfolioList?.data?.portfolio_list));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolioList?.data?.portfolio_list]);

  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setPage((page) => page + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll, true);
    return () => window.removeEventListener("scroll", infiniteScroll, true);
  }, [infiniteScroll]);

  useEffect(() => {
    setSearchText(query);
  }, [query, setSearchText]);

  if (isLoading)
    return <BarLoader color={mainColor} height="4px" width="100px" />;

  return (
    <S.MainListWrapper className="container">
      <Search />
      <S.ListWrapper>
        {articles.length === 0 ? (
          <p className="list-not-comment">작성된 포트폴리오가 없습니다</p>
        ) : (
          <>
            {query && <S.SearchContent>{query}의 검색결과...</S.SearchContent>}

            <S.ListContent>
              {articles.map((list: PortListType, index: number) => (
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
