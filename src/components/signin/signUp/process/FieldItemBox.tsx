import React from "react";
import { CloseIcon } from "../../../../util/assets";
import * as S from "./style";

interface Props {
  field: string;
  setTextList?: any;
  textList?: [];
}

const FieldItemBox = ({ field, setTextList, textList }: Props) => {
  function UseFieldDelete(txt: string) {
    setTextList(textList?.filter((field: string) => field !== txt));
  }

  return (
    <>
      <S.FieldItemWrapper>
        <span>{field}</span>
        <img
          src={CloseIcon}
          alt="닫기 아이콘"
          onClick={() => {
            UseFieldDelete(field);
          }}
        />
      </S.FieldItemWrapper>
    </>
  );
};

export default FieldItemBox;
