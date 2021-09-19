import react from "react";
import { Header, Banner } from "../../index";
import FilterBar from "./filterBar/FilterBar";
import * as S from "./style";

const Main = () => {
  return (
    <S.MainWrapper>
      <Header />
      <Banner />
      <FilterBar />
    </S.MainWrapper>
  );
};

export default Main;
