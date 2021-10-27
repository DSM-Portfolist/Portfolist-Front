import React from "react";
import { Header } from "..";
import * as S from "./style";
import TitleContainer from "./titleContainer/TitleContainer";

const portfolioMake = () => {
  return (
    <>
      <Header />
      <S.MainContainer>
        <p className="caution">
          파일 혹은 링크 첨부로 포트폴리오를 업로드 하실 경우 제목과 본인
          소개를필수로 작성해주세요.
        </p>
        <TitleContainer />
      </S.MainContainer>
    </>
  );
};

export default portfolioMake;
