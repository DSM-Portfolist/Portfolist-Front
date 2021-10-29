import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { Header, Comment, Title, ExperienceList } from "..";
import { portfoilo } from "../../modules/atom/portfolio";
import { getPortfolist } from "../../util/api/portfolio/getList";
import { PortfolioType } from "../../util/interface/portfolio/portfolioDetailType";
import MoreInfo from "./items/moreInfo/MoreInfo";
import * as S from "./style";
import ClipLoader from "react-spinners/ClipLoader";
import { mainColor } from "../../util/css/color/color";

const PortfolioDetail = () => {
  const { data, isLoading, error } = useQuery("getPortfolio", getPortfolist);
  const setPortfolioValue = useSetRecoilState<PortfolioType>(portfoilo);

  useEffect(() => {
    setPortfolioValue(data?.data);
  }, [data?.data, setPortfolioValue]);

  if (isLoading)
    return <ClipLoader color={mainColor} loading={isLoading} size={30} />;
  if (error) return <>404 서버 오류입니다. </>;

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
