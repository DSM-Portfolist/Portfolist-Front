import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { getFieldSelector } from "../../../../modules/atom/portfolio";
import { CloseIcon } from "../../../../util/assets";
import * as S from "./style";

const FieldItemWrapper = () => {
  const fieldList = useRecoilValue(getFieldSelector);
  const [selectIdList, setSelectIdList] = useState<number[]>([]);

  const handleSelect = (e: any) => {
    const { value } = e.target;
    if (selectIdList.length !== 3) {
      if (!selectIdList.includes(e)) {
        setSelectIdList([...selectIdList, value]);
      }
    } else {
      alert("3개 이상 안돼요");
    }
  };
  return (
    <div>
      <S.FieldItemWrapper>
        <select
          onChange={(e) => {
            handleSelect(e);
          }}
        >
          <option selected disabled hidden>
            분야를 선택하세요
          </option>
          {fieldList.map((item: any, index: number) => {
            console.log(item);
            return (
              <option key={index} value={item.id}>
                {item.content}
              </option>
            );
          })}
        </select>
        <S.FieldItemContainer>
          <span></span>
          <img src={CloseIcon} alt="닫기 아이콘" onClick={() => {}} />
        </S.FieldItemContainer>
      </S.FieldItemWrapper>
    </div>
  );
};

export default FieldItemWrapper;
