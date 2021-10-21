import React from "react";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import { CloseIcon } from "../../../../util/assets";

interface Props {
  field: string;
  setFieldList?: any;
  fieldList?: [];
}

const FieldItemBox = (props: Props) => {
  const {} = Props;
  return (
    <S.FieldItemContainer>
      <span>{field}</span>
      <img
        src={CloseIcon}
        alt="닫기 아이콘"
        onClick={() => {
          UseFieldDelete(field);
        }}
      />
    </S.FieldItemContainer>
  );
};

export default FieldItemBox;
