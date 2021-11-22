import React from "react";
import { useRecoilValue } from "recoil";
import { monthPortfolioSelector } from "../../../../modules/selector/mainpage";
import { Crwon, Flower } from "../../../../util/assets";
import * as S from "./style";

const MonthPortfolio = () => {
  const monthPortfolio = useRecoilValue(monthPortfolioSelector);

  return (
    <div className="border-bottom">
      <S.MonthWrapper>
        <img
          className="crwon-icon"
          src={Crwon}
          alt="이달의 포트폴리오 강조 아이콘"
        />
        <div className="img-wrapper">
          <img src={Flower} alt="이달의 포트폴리오 이미지" />
        </div>
        <S.Content>
          <h2>이달의 포트폴리오</h2>
          <p className="introduce">
            여러분들이 선택한 touching 중 이달의 포트폴리오입니다.
          </p>
          <p className="user-introduce">
            {monthPortfolio?.name}님의 포트폴리오 입니다.
          </p>
          <div className="user-content">
            <p>{monthPortfolio?.title}</p>
            <p>{monthPortfolio?.introduce}</p>
          </div>
        </S.Content>
      </S.MonthWrapper>
    </div>
  );
};

export default MonthPortfolio;
