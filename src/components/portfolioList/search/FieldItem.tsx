import React from "react";
import { CloseIcon } from "../../../util/assets";
import * as S from "./style";

interface Props {
  field: string;
}

const FieldItem = ({ field }: Props) => {
  return (
    <S.FieldItemWrapper>
      <span>{field}</span>
      <img src={CloseIcon} alt="닫기 아이콘" />
    </S.FieldItemWrapper>
  );
};

export default FieldItem;
