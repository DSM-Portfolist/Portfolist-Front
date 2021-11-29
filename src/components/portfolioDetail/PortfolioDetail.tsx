import React from "react";
import { useSetRecoilState } from "recoil";
import { Header, Comment, Title, ExperienceList } from "..";
import { portfolioId } from "../../modules/atom/portfolio";
import CertificateList from "./items/certificate/CertificateList";
import MoreInfo from "./items/moreInfo/MoreInfo";
import PdfFile from "./items/pdfFile";
import TouchingItem from "./items/touching/TouchingItem";
import * as S from "./style";

const PortfolioDetail = ({ match }: any) => {
  const setPortfolioId = useSetRecoilState(portfolioId);
  setPortfolioId(match.params.id);

  return (
    <>
      <Header />
      <S.DetailWrappper>
        <PdfFile />
        <Title />
        <TouchingItem />
        <MoreInfo />
        <ExperienceList />
        <CertificateList />
        <Comment />
      </S.DetailWrappper>
    </>
  );
};

export default PortfolioDetail;
