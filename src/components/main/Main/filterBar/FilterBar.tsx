import React from "react";
import { Arrow } from "../../../../util/assets";
import * as S from "./style";

const FilterBar = () => {
  return (
    <S.FilterWrapper>
      <S.FilterItem></S.FilterItem>
      <S.MoreItem>
        <p>보러가기</p>
        <img src={Arrow} alt="더보거가기 아이콘" />
      </S.MoreItem>
    </S.FilterWrapper>
  );
};

export default FilterBar;
