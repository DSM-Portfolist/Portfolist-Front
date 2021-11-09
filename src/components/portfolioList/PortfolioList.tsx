import React from "react";
import { Header, MainList } from "..";

const PortfolioList = ({ match }: any) => {
  console.dir(match);

  return (
    <>
      <Header />
      <MainList />
    </>
  );
};

export default PortfolioList;
