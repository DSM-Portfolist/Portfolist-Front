import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getFieldSelector } from "../../../../modules/atom/portfolio";
import { CloseIcon } from "../../../../util/assets";
import * as S from "./style";

const FieldItemWrapper = () => {
  const fieldList = useRecoilValue(getFieldSelector);
  const [selectIdList, setSelectIdList] = useState<number[]>([]);

  useEffect(() => {
    console.log(selectIdList);
  }, [selectIdList]);

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
    <S.MainContainer>
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
            return (
              <option key={index} value={item.id}>
                {item.content}
              </option>
            );
          })}
        </select>
        {selectIdList.map((item: any, index: number) => {
          return (
            <S.FieldItemContainer>
              <span>{item}</span>
              <img src={CloseIcon} alt="닫기 아이콘" onClick={() => {}} />
            </S.FieldItemContainer>
          );
        })}
      </S.FieldItemWrapper>
    </S.MainContainer>
  );
};

export default FieldItemWrapper;
