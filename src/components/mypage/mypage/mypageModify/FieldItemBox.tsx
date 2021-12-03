import React from "react";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import { CloseIcon } from "../../../../util/assets";
import { FieldType } from "../../../../util/interface/Sign/loginType";

interface Props {
  selectNameArr?: string[];
  setSelectIdArr: any;
  setSelectNameArr: any;
  selectIdArr?: number[];
  fieldList: FieldType[];
  field: string;
}

const FieldItemBox = ({
  selectNameArr,
  selectIdArr,
  setSelectIdArr,
  setSelectNameArr,
  fieldList,
  field,
}: Props) => {
  /*   function UseFieldDelete(txt: string) {
    //let newArr = selectIdArr;
    //newArr?.splice(newArr.indexOf(id), 1);
    setSelectNameArr(selectNameArr?.filter((field: any) => field !== txt));
    console.log(selectNameArr?.filter((field: any) => field !== txt));
    //setSelectIdArr(selectIdArr);
  } */

  return (
    <S.FieldItemContainer>
      <span>{field}</span>
      <img src={CloseIcon} alt="닫기 아이콘" onClick={() => {}} />
    </S.FieldItemContainer>
  );
};

export default FieldItemBox;
