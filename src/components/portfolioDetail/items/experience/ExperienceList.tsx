import React from "react";
import { TestImg } from "../../../../util/assets";
import {
  ContainerListType,
  ContainerType,
  PortfolioType,
} from "../../../../util/interface/portfolio/portfolioDetailType";
import * as S from "./style";

interface Props {
  portfolio: ContainerType;
}

const ExperienceList = ({ portfolio }: Props) => {
  console.log(portfolio);

  return (
    <>
      {portfolio.map((item: ContainerListType, index: number) => (
        <S.ExperienceWrapper key={index}>
          <S.MainTitle>{item.container_title}</S.MainTitle>
          <S.ContainerBox>
            <img src={TestImg} alt="경험 이미지" />
            <S.ContentWraper>
              <span className="sub-title">
                🥈 2021 지방기능경기대회 웹디자인 및 개발 은메달
              </span>
              <span className="sub-content">
                지방기능경기대회를 준비하면서 지방기능경기대회를 준비하면서
                지방기능경기대회를 준비 지방기능경기대회를 준비하면서
                지방기능경기대회를 준비하면서 지방기능경기대회를
                준비하면지방기능경기대회를 준비하면서 지방기능경기대회를
                준비하면서 지방기능경기대회를 준비하면서 열심히 했습니다.
              </span>
            </S.ContentWraper>
          </S.ContainerBox>
        </S.ExperienceWrapper>
      ))}
    </>
  );
};

export default ExperienceList;
