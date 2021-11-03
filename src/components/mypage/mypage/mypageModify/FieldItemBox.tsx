import React, { useEffect } from "react";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import { CloseIcon } from "../../../../util/assets";

type fieldItemType = {
  id: string;
  content: string;
};

interface Props {
  selectNameArr?: string[];
  setSelectIdArr: any;
  setSelectNameArr: any;
  selectIdArr?: string[];
  fieldItem: Array<fieldItemType>;
  field: string;
}

const FieldItemBox = (props: Props) => {
  const {
    selectNameArr,
    selectIdArr,
    setSelectIdArr,
    setSelectNameArr,
    fieldItem,
    field,
  } = props;

  function UseFieldDelete(txt: string, id: string) {
    let newArr = selectIdArr;
    newArr?.splice(newArr.indexOf(`${id}`), 1);
    setSelectNameArr(selectNameArr?.filter((field: any) => field !== txt));
    setSelectIdArr(newArr);
  }

  return (
    <S.FieldItemContainer>
      <span>{field}</span>
      <img
        src={CloseIcon}
        alt="닫기 아이콘"
        onClick={() => {
          let index = 0;
          fieldItem.forEach((e) => {
            if (field === e.content) {
              return;
            }
            index += 1;
          });
          UseFieldDelete(field, fieldItem[index].id);
        }}
      />
    </S.FieldItemContainer>
  );
};

export default FieldItemBox;
