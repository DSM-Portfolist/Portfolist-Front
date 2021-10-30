import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import ClipLoader from "react-spinners/ClipLoader";
import { Header, Comment, Title, ExperienceList } from "..";
import { portfoilo } from "../../modules/atom/portfolio/portfolioDetail";
import { PortfolioType } from "../../util/interface/portfolio/portfolioDetailType";
import { getPortfolist } from "../../util/api/portfolio/portfolio";
import { mainColor } from "../../util/css/color/color";
import MoreInfo from "./items/moreInfo/MoreInfo";
import * as S from "./style";

const PortfolioDetail = () => {
  const { data, isLoading, error } = useQuery("getPortfolio", getPortfolist);
  const [portfoilioValue, setPortfolioValue] =
    useRecoilState<PortfolioType>(portfoilo);

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
        <Comment id={portfoilioValue?.id} />
      </S.DetailWrappper>
    </>
  );
};

export default PortfolioDetail;
