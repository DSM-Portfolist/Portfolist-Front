import React from "react";
import { Header, Comment, Title } from "..";
import * as portfolio from "./dummy.json";

import * as S from "./style";

const PortfolioDetail = () => {
  return (
    <>
      <Header />
      <S.DetailWrappper>
        <Title portfolio={portfolio} />
      </S.DetailWrappper>
      <Comment />
    </>
  );
};

export default PortfolioDetail;
