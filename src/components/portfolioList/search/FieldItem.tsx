import React from "react";
import { CloseIcon } from "../../../util/assets";
import * as S from "./style";

const FieldItem = () => {
  return (
    <S.FieldItemWrapper>
      <span>프론트엔드</span>
      <img src={CloseIcon} alt="닫기 아이콘" />
    </S.FieldItemWrapper>
  );
};

export default FieldItem;
