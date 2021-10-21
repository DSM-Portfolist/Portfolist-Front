import React from "react";
import { ToastSuccess } from "../../../../hook/toastHook";
import { CloseIcon } from "../../../../util/assets";
import { FieldType } from "../../../../util/interface/Sign/loginType";
import * as S from "./style";

interface Props {
  field: string;
  setFieldList?: any;
  fieldList?: [];
}

const FieldItemBox = ({ field, setFieldList, fieldList }: Props) => {
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
            ToastSuccess(`${field}분야의 필터가 취소되었어요!`);
          }}
        />
      </S.FieldItemWrapper>
    </>
  );
};

export default FieldItemBox;
