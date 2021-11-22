import React from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { useFieldValue } from "../../../../modules/atom/portfolio/search";
import { Arrow } from "../../../../util/assets";
import FilterItem from "./FilterItem";
import * as S from "./style";

const FilterBar = () => {
  const useField = useRecoilValue(useFieldValue);
  const history = useHistory();

  return (
    <S.FilterWrapper>
      <S.FilterItemWrap>
        <FilterItem />
        <FilterItem />
        <FilterItem />
      </S.FilterItemWrap>
      <S.MoreItem
        onClick={() =>
          history.push(
            `/list?page=1&size=10&field=${useField}&sort=date&query=&searchType=`
          )
        }
      >
        <p>보러가기</p>
        <img src={Arrow} alt="더보거가기 아이콘" />
      </S.MoreItem>
    </S.FilterWrapper>
  );
};

export default FilterBar;
