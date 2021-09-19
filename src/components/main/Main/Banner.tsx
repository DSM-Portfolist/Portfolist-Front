import React, { useEffect, useRef, useState } from "react";
import { MainImg1, MainImg2, MainImg3 } from "../../../util/assets";
import * as S from "./style";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const sliderRef = useRef<any>();
  const [val, setVal] = useState<number>(0);

  useEffect(() => {
    sliderRef.current.style.transition = "all 1.5s ease-in-out";
    sliderRef.current.style.transform = `translateX(-${currentSlider}00%)`;

    let i = 0;

    setInterval(() => {
      i++;
      setVal(i);

      if (i === 2) i = -1;
    }, 10000);
  }, [currentSlider]);

  return (
    <S.BannerWrapper
      ref={sliderRef}
      style={{ transform: `translateX(${-val * 100}vw)` }}
    >
      <img src={MainImg1} alt="메인베너" />
      <img src={MainImg2} alt="메인베너" />
      <img src={MainImg3} alt="메인베너" />
    </S.BannerWrapper>
  );
};

export default Banner;
