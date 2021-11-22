import React from "react";
import * as S from "./style";

const BannerContainer = () => {
  return (
    <S.BannerWrap className="make-container">
      <S.Title>
        <span>나만의 포트폴리오를 보여줄 배너 이미지를 선택해주세요.</span>
        <span>본인이 따로 이미지를 올릴 수도 있습니다.</span>
      </S.Title>
    </S.BannerWrap>
  );
};

export default BannerContainer;
