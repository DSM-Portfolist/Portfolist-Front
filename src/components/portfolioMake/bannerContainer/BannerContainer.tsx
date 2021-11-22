import React from "react";
import { File } from "../../../util/assets";
import ImageSelector from "./items/ImageSelector";
import * as S from "./style";

const BannerContainer = () => {
  return (
    <S.BannerWrap className="make-container">
      <S.Title>
        <span>나만의 포트폴리오를 보여줄 배너 이미지를 선택해주세요.</span>
        <span>본인이 따로 이미지를 올릴 수도 있습니다.</span>
      </S.Title>
      <ImageSelector />
      <S.Title>
        <span>
          포트폴리오 배너 이미지에 넣고 싶은 이미지를 직접 넣어주세요.
        </span>
        <div className="file-wrap">
          <label htmlFor="file">
            <img src={File} alt="파일 아이콘" />
            <input type="file" id="file" />
          </label>
        </div>
      </S.Title>
    </S.BannerWrap>
  );
};

export default BannerContainer;
