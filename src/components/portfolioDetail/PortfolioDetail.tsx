import React from "react";
import * as S from "./style";
import Report from "./report/Report";
import QueryString from "query-string";
import { useLocation } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Header, Comment, Title, ExperienceList, Footer } from "..";
import { portfolioId } from "../../modules/atom/portfolio";
import CertificateList from "./items/certificate/CertificateList";
import MoreInfo from "./items/moreInfo/MoreInfo";
import PdfFile from "./items/pdfFile";
import TouchingItem from "./items/touching/TouchingItem";
import { getPortfolioSelecor } from "../../modules/atom/portfolio/portfolioDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
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
      <Report />
    </>
  );
};

export default PortfolioDetail;
