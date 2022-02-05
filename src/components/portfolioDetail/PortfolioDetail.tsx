import React from "react";
import * as S from "./style";
import Report from "./report/Report";
import QueryString from "query-string";
import { useLocation } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Header, Comment, ExperienceList, Footer } from "..";
import { portfolioId } from "../../modules/atom/portfolio";
import CertificateList from "./items/certificate/CertificateList";
import MoreInfo from "./items/moreInfo/MoreInfo";
import PdfFile from "./items/pdfFile";
import TouchingItem from "./items/touching/TouchingItem";
import { getPortfolioSelecor } from "../../modules/atom/portfolio/portfolioDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Title from "./items/title";

const PortfolioDetail = () => {
  const setPortfolioId = useSetRecoilState(portfolioId);
  const portfolioValue = useRecoilValue(getPortfolioSelecor);

  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  setPortfolioId(id);

  return (
    <>
      <Header />
      <ToastContainer />
      <S.DetailWrappper>
        <Title />
        <TouchingItem />
        {portfolioValue?.more_info?.[0].name && <MoreInfo />}
        {portfolioValue?.container_list?.[0].container_title && (
          <ExperienceList />
        )}
        {portfolioValue?.certificate_container_list?.[0].title && (
          <CertificateList />
        )}
        {portfolioValue?.file && <PdfFile file={portfolioValue?.file} />}
        <Comment />
      </S.DetailWrappper>
      <Report />
      <Footer />
    </>
  );
};

export default PortfolioDetail;
