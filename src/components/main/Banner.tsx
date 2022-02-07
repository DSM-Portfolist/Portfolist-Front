import React, { useEffect, useRef, useState } from "react";
import { MainImg1, MainImg2, MainImg3 } from "../../util/assets";
import * as S from "./style";

const Banner = () => {
  const sliderRef = useRef<any>();
  const [val, setVal] = useState<number>(0);

  useEffect(() => {
    sliderRef.current.style.transition = "all 1.5s ease-in-out";

    let i = 0;

    setInterval(() => {
      i++;
      setVal(i);

      if (i === 2) i = -1;
    }, 10000);
  }, []);

  return (
    <>
      <S.BannerWrapper
        ref={sliderRef}
        style={{ transform: `translateX(${-val * 100}vw)` }}
      >
        <img src={MainImg1} alt="메인베너" />
        <img src={MainImg2} alt="메인베너" />
        <img src={MainImg3} alt="메인베너" />
      </S.BannerWrapper>
      <S.BannerContent>
        <div className="top-content">
          <span>개발자들의 포트폴리오 저장소,</span>
          <span>developer's portfolio repository,</span>
        </div>
        <div className="title-content">
          <span>portfolist</span>
        </div>
      </S.BannerContent>
    </>
  );
};

export default Banner;
