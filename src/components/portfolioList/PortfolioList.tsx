import React, { useState } from "react";
import { Header, MainList } from "..";

const PortfolioList = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
      <Header />
      <MainList setSearchValue={setSearchValue} searchValue={searchValue} />
    </>
  );
};

export default PortfolioList;
