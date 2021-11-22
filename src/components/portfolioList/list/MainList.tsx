import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Search, ListItem } from "../..";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { useRecoilValue } from "recoil";
import { getPortListSelector } from "../../../modules/atom/portfolio";
import { useLocation } from "react-router";
import QueryString from "query-string";
import { getSearch } from "../../../util/api/portfolio/portfolio";

const MainList = () => {
  const [list, setList] = useState<PortListType[]>();
  const portfolioList = useRecoilValue(getPortListSelector);
  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const query = queryData.query;

  useEffect(() => {
    const getPorfolio = async () => {
      try {
        await getSearch(query, "title").then((res) => {
          setList(res.data.portfolio_list);
        });
      } catch (e) {
        console.log(e);
      }
    };

    getPorfolio();
    setList(portfolioList);
  }, [portfolioList, query]);

  return (
    <S.MainListWrapper className="container">
      <Search />
      <S.ListWrapper>
        {list?.length === 0 ? (
          <p className="list-not-comment">작성된 포트폴리오가 없습니다</p>
        ) : (
          <>
            {query?.length === 0 ? (
              ""
            ) : (
              <S.SearchContent>{query}의 검색결과...</S.SearchContent>
            )}

            <S.ListContent>
              {list?.map((list: PortListType, index: number) => (
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
