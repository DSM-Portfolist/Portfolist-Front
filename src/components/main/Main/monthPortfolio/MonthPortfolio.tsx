import React from "react";
import { Flower } from "../../../../util/assets";
import * as S from "./style";

const MonthPortfolio = () => {
  return (
    <div className="border-bottom">
      <S.MonthWrapper>
        <div className="img-wrapper">
          <img src={Flower} alt="이달의 포트폴리오 이미지" />
        </div>
        <S.Content>
          <h2>이달의 포트폴리오</h2>
          <p className="introduce">
            여러분들이 선택한 touching 중 이달의 포트폴리오입니다.
          </p>
          <p className="user-introduce">강은빈님의 포트폴리오 입니다.</p>
          <div className="user-content">
            <p>title 입니다.</p>
            <p>배달의 민족에서 3년차 개발을 하고 있는 xxx입니다.</p>
          </div>
        </S.Content>
      </S.MonthWrapper>
    </div>
  );
};

export default MonthPortfolio;
