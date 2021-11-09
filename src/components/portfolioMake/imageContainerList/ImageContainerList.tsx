import React, { useState } from "react";
import * as S from "./style";
import ImageWrapper from "./imageWrapper/ImageWrapper";
import ContentWrapper from "./contentWrapper/ContentWrapper";

const ImageContainerList = () => {
  return (
    <S.MainWrapper className="make-container">
      <header>
        <button type="button">리스트 추가하기</button>
      </header>
      <S.ImageWrapeerList>
        <input
          type="text"
          className="Title"
          placeholder="자신만의 특별한 경험(경력, 인턴, 교육 등)이 있다면 입력해주세요."
        />
        <S.ImageListSection>
          <ImageWrapper />
          <ContentWrapper></ContentWrapper>
        </S.ImageListSection>
      </S.ImageWrapeerList>
    </S.MainWrapper>
  );
};

export default ImageContainerList;
