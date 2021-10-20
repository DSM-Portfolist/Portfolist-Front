import React, { useState } from "react";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import { ToastContainer } from "react-toastify";
import { ToastError } from "../../../../hook/toastHook";

const MyInfoModifyDetail = () => {
  const [selectArr, setSelectArr] = useState<any>([]);

  console.log(selectArr);

  const handleSelect = (e: any) => {
    //분야 배열에 추가 중복 허용 x
    const { value } = e.target;
    if (!selectArr.includes(value)) {
      if (selectArr.length >= 6) {
        ToastError("분야는 최대 5개까지 가능합니다");
      } else {
        setSelectArr(selectArr.concat([e.target.value]));
      }
    }
  };

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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </S.FieldSelecteWrapper>
      <p>분야는 최대 3개까지 선택할 수 있습니다. </p>
      <button type="button" value="취소" />
      <input type="submit" value="완료" />
    </S.ModifyDetailContainer>
  );
};

export default MyInfoModifyDetail;
