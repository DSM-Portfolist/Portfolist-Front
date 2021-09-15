import React from "react";
import { MainImg1, MainImg2, MainImg3 } from "../../../util/assets";
import * as S from "./style";

const Banner = () => {
  setTimeout(() => {
      let i = 0;

      if (i === 2) i = 0

  }, 7000);
  return (
    <S.BannerWrapper>
      <img src={MainImg1} alt="메인베너" />
      <img src={MainImg2} alt="메인베너" />
      <img src={MainImg3} alt="메인베너" />
    </S.BannerWrapper>
  );
};

export default Banner;
