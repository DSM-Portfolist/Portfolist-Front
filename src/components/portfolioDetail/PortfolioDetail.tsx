import React from "react";
import { useLocation } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Header, Comment, Title, ExperienceList, Footer } from "..";
import { portfolioId } from "../../modules/atom/portfolio";
import CertificateList from "./items/certificate/CertificateList";
import MoreInfo from "./items/moreInfo/MoreInfo";
import PdfFile from "./items/pdfFile";
import QueryString from "query-string";
import TouchingItem from "./items/touching/TouchingItem";
import * as S from "./style";
import { getPortfolioSelecor } from "../../modules/atom/portfolio/portfolioDetail";

const PortfolioDetail = () => {
  const setPortfolioId = useSetRecoilState(portfolioId);
  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;
  const portfolioValue = useRecoilValue(getPortfolioSelecor);

  setPortfolioId(id);

  return (
    <>
      <Header />
      <S.DetailWrappper>
        <Title />
        <TouchingItem />
        <MoreInfo />
        <ExperienceList />
        <CertificateList />
        {portfolioValue?.file === "" ? (
          ""
        ) : (
          <PdfFile file={portfolioValue?.file} />
        )}
        <Comment />
      </S.DetailWrappper>
    </>
  );
};

export default PortfolioDetail;
