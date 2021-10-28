import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { Header, Comment, Title, ExperienceList } from "..";
import { portfoilo } from "../../modules/atom/portfolio";
import { getPortfolist } from "../../util/api/portfolio/getList";
import { PortfolioType } from "../../util/interface/portfolio/portfolioDetailType";
import MoreInfo from "./items/moreInfo/MoreInfo";
import * as S from "./style";

const PortfolioDetail = () => {
  const { data, isLoading, error } = useQuery("getPortfolio", getPortfolist);
  const setPortfolioValue = useSetRecoilState<PortfolioType>(portfoilo);
  

  useEffect(() => {
    setPortfolioValue(data?.data);
  }, [data?.data, setPortfolioValue]);

  if (isLoading) return <>잠시만 기다려주세요</>;
  if (error) return <>404 서버 오류입니다. </>;

  return (
    <>
      <Header />
      <S.DetailWrappper>
        <div className="portfolio-container">
          <Title />
          <MoreInfo />
          <ExperienceList />
        </div>
      </S.DetailWrappper>
      <Comment />
    </>
  );
};

export default PortfolioDetail;
