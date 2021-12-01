import React from "react";
import { useRecoilValue } from "recoil";
import { getFieldSelector } from "../../../modules/atom/portfolio";
import { CloseIcon } from "../../../util/assets";
import * as S from "./style";

const OptionContainer = () => {
  const fieldList = useRecoilValue(getFieldSelector);

  console.log(fieldList);

  const handleSelect = (e: any) => {
    console.log(e);
  };
  
  return (
    <S.OptionContainer>
      <S.FieldItemWrapper>
        <select
          onChange={(e) => {
            console.log(e);
          }}
        >
          <option selected disabled hidden>
            분야를 선택하세요
          </option>
          {fieldList.map((item: any, index: number) => {
            console.log(item);
            return (
              <option key={index} value={item.content}>
                {item.content}
              </option>
            );
          })}
        </select>
      </S.FieldItemWrapper>
    </S.OptionContainer>
  );
};

export default OptionContainer;
