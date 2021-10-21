import React from "react";
import { CloseIcon } from "../../../../util/assets";
import { FieldType } from "../../../../util/interface/Sign/loginType";
import * as S from "./style";

interface Props {
  field: string;
  setFieldList?: any;
  fieldList?: [];
  fieldItem: FieldType[];
}

const FieldItemBox = ({ field, setFieldList, fieldList, fieldItem }: Props) => {
  function UseFieldDelete(txt: string) {
    setFieldList(
      fieldList?.filter((field: FieldType) => field.content !== txt)
    );
    console.log(fieldList);
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
