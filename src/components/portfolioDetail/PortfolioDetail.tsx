import React from "react";
import { useSetRecoilState } from "recoil";
import { Header, Comment, Title, ExperienceList } from "..";
import { portfolioId } from "../../modules/atom/portfolio";
import MoreInfo from "./items/moreInfo/MoreInfo";
import * as S from "./style";

const PortfolioDetail = ({ match }: any) => {
  const setPortfolioId = useSetRecoilState(portfolioId);
  setPortfolioId(match.params.id);

  return (
    <>
      <Header />
      <S.DetailWrappper>
        <Title />
        <MoreInfo />
        <ExperienceList />
        <Comment />
      </S.DetailWrappper>
    </>
  );
};

export default PortfolioDetail;
