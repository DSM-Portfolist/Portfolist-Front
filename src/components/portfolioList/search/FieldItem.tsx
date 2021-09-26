import React from "react";
import { CloseIcon } from "../../../util/assets";
import * as S from "./style";

interface Props {
  field: string;
  setUseField: any;
  useField: [];
}

const FieldItem = ({ field, setUseField, useField }: Props) => {
  
  function UseFieldDelete(txt: string) {
    setUseField(useField.filter((txt) => field !== txt));
  }

  return (
    <S.FieldItemWrapper>
      <span>{field}</span>
      <img
        src={CloseIcon}
        alt="닫기 아이콘"
        onClick={() => UseFieldDelete(field)}
      />
    </S.FieldItemWrapper>
  );
};

export default FieldItem;
