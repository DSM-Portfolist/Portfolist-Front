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

  // 1. 페이지와 분야, 최신순, 검색문구에 따라 데이터가 달라진다. 페이지는 무한스크롤이 되어 다음 데이터로 불러온다
  // 다음 데이터를 불러오고 난후, 기존 데이터와 연결시켜준다.
  // 2. 페이지가 0 일때 필터링이 되어야 하며, 또 그에 맞게 무한스크롤을 해야한다.
  // 3. 전체 선택일 경우 일반적이게 잘 된다. 하지만 분야가 들어가는 순간 막힌다.

  useEffect(() => {
    setPage(0);

    //  setArticles(portfolioList?.data?.portfolio_list);
  }, [field]);

  useEffect(() => {
    console.log(portfolioList);
    //setArticles(articles.concat(portfolioList?.data?.portfolio_list));
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
      if (parseInt(String(portfolioList?.data?.total_elements / 12)) === page) {
        console.log(true);
        setPage(page);
      } else {
        setPage(page + 1);
        console.log(page + 1);
      }
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
        {portfolioList?.data.portfolio_list?.length === 0 ? (
          <p className="list-not-comment">작성된 포트폴리오가 없습니다</p>
        ) : (
          <>
            {query && <S.SearchContent>{query}의 검색결과...</S.SearchContent>}

            <S.ListContent>
              {portfolioList?.data.portfolio_list.map(
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
