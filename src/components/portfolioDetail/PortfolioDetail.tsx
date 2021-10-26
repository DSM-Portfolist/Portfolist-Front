import React from "react";
import { Header, Comment, Title, ExperienceList } from "..";
import * as portfolio from "./dummy.json";
import MoreInfo from "./items/moreInfo/MoreInfo";
import * as S from "./style";

const PortfolioDetail = () => {
  return (
    <>
      <Header />
      <S.DetailWrappper>
        <div className="portfolio-container">
          <Title portfolio={portfolio} />
          <MoreInfo portfolio={portfolio} />
          <ExperienceList />
        </div>
      </S.DetailWrappper>
      <Comment />
    </>
  );
};

export default PortfolioDetail;
