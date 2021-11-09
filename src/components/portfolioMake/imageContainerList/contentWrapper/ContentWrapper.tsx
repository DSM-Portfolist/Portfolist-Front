import React from "react";
import { MinusButton } from "../../../../util/assets";
import * as S from "./style";

const ContentWrapper = () => {
  return (
    <S.ContentContainer>
      <div className="Title">
        <input placeholder="제목을 입력해주세요." />
        <img src={MinusButton} alt="MinusButton" />
      </div>
      <textarea
        placeholder="내용을 입력해주세요."
        className="Content"
      ></textarea>
      <span
        className="addContent"
        onClick={() => {
          console.log('test');
        }}
      >
        내용 추가
      </span>
    </S.ContentContainer>
  );
};

export default ContentWrapper;
