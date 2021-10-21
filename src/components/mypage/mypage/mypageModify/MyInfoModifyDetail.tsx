import React, { useState } from "react";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import { ToastContainer } from "react-toastify";
import { ToastError } from "../../../../hook/toastHook";
import axios from "axios";
import { useQuery } from "react-query";
import { MAINURL } from "../../../../util/api";
import { FieldType } from "../../../../util/interface/Sign/loginType";
import FieldItemBox from "./FieldItemBox";

const MyInfoModifyDetail = () => {
  const [selectArr, setSelectArr] = useState<any>([]);

  console.log(selectArr);

  const handleSelect = (e: any) => {
    //분야 배열에 추가 중복 허용 x
    const { value } = e.target;
    if (!selectArr.includes(value)) {
      if (selectArr.length >= 4) {
        ToastError("분야는 최대 3개까지 가능합니다");
      } else {
        setSelectArr(selectArr.concat([e.target.value]));
      }
    }
  };

  const { data } = useQuery("field", () => axios(`${MAINURL}/field`));
  const fieldItem = data?.data;

  return (
    <S.ModifyDetailContainer>
      <ToastContainer />
      <S.InputWrapper>
        <input type="text" placeholder="사용하실 닉네임을 입력하세요" />
        <input type="text" placeholder="자신을 한줄 소개 해주세요" />
      </S.InputWrapper>
      <S.FieldSelecteWrapper>
        <span>
          <b>분야</b>
        </span>
        <select onChange={handleSelect}>
          <option selected disabled hidden>
            분야를 선택하세요
          </option>
          {fieldItem?.map((field: FieldType, index: number) => (
            <option key={index} value={field.id}>
              {field.content}
            </option>
          ))}
        </select>
        <FieldItemBox />
      </S.FieldSelecteWrapper>
      <p>분야는 최대 3개까지 선택할 수 있습니다. </p>
      <button type="button" value="취소" />
      <input type="submit" value="완료" />
    </S.ModifyDetailContainer>
  );
};

export default MyInfoModifyDetail;
