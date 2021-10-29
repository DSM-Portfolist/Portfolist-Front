import React from "react";
import * as S from "./style";
import { Search, ListItem } from "../..";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { getList } from "../../../util/api/portfolio/getList";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";
import { mainColor } from "../../../util/css/color/color";

interface Props {
  searchValue: string;
  setSearchValue: any;
}

const MainList = ({ searchValue, setSearchValue }: Props) => {
  const { isLoading, data } = useQuery("lists", getList);

  return (
    <S.MainListWrapper className="container">
      <Search setSearchValue={setSearchValue} />
      <S.ListWrapper>
        {data?.portfolio_list.length === 0 ? (
          <div>작성된 포트폴리오가 없습니다</div>
        ) : (
          <>
            {isLoading ? (
              <ClipLoader color={mainColor} loading={isLoading} size={30} />
            ) : (
              <>
                {searchValue.length === 0 ? (
                  ""
                ) : (
                  <S.SearchContent>{searchValue}의 검색결과...</S.SearchContent>
                )}

                <S.ListContent>
                  {data?.portfolio_list.map(
                    (list: PortListType, index: number) => (
                      <ListItem key={index} list={list} />
                    )
                  )}
                </S.ListContent>
              </>
            )}
          </>
        )}
      </S.ListWrapper>
    </S.MainListWrapper>
  );
};

export default MainList;
