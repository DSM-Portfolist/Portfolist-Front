import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import ClipLoader from "react-spinners/ClipLoader";
import { Header, Comment, Title, ExperienceList } from "..";
import { portfoilo } from "../../modules/atom/portfolio/portfolioDetail";
import { getPortfolist } from "../../util/api/portfolio/portfolio";
import { mainColor } from "../../util/css/color/color";
import MoreInfo from "./items/moreInfo/MoreInfo";
import * as S from "./style";
import { getComment } from "../../util/api/portfolio/comment";
import { commentList } from "../../modules/atom/portfolio/comment";

const PortfolioDetail = () => {
  const [portfoilioValue, setPortfolioValue] = useRecoilState(portfoilo);
  const [comments, setComments] = useRecoilState(commentList);
  const { data, isLoading, error } = useQuery("getPortfolio", getPortfolist);
  useQuery("comment", () =>
    getComment(2).then((res) => {
      setComments(res);
    })
  );

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
        <Comment id={portfoilioValue?.portfolio_id} />
      </S.DetailWrappper>
    </>
  );
};

export default PortfolioDetail;
