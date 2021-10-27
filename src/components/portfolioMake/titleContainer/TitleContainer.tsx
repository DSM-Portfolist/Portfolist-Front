import React, { useState } from "react";
import * as S from "./style";

const TitleContainer = () => {
  const [isNullArr, setIsNullArr] = useState<any>([
    { isNull: true },
    { isNull: true },
  ]);

  const handlerOnChange = (e: any) => {
    const { className, value } = e.target;
    console.log(e);
    if (value !== "") {
      let newArr = isNullArr.map((item: any) => {
        if (className === "Title" || className === "Introduce") {
          return { isNullArr: false };
        }
        return item;
      });
      setIsNullArr(newArr);
    }
  };

  return (
    <S.MainContainer>
      <S.InputWrapper onChange={handlerOnChange}>
        <input
          type="text"
          className="Title"
          placeholder="제목을 입력해주세요."
        />
        {isNullArr[0] ? <span className="title-span">*</span> : ""}
      </S.InputWrapper>
      <S.InputWrapper>
        <input
          type="text"
          className="Introduce"
          placeholder="본인을 간단하게 소개해주세요."
        />
        {isNullArr[1] ? <span className="introduce-span">*</span> : ""}
      </S.InputWrapper>
    </S.MainContainer>
  );
};

export default TitleContainer;
