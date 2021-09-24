import { Header, Banner, List, MonthPortfolio, News } from "../../index";
import FilterBar from "./filterBar/FilterBar";
import Introduce from "./introduce/Introduce";
import * as S from "./style";

const Main = () => {
  return (
    <S.MainWrapper>
      <Header />
      <Banner />
      <FilterBar />
      <List />
      <MonthPortfolio />
      <Introduce />
      <News />
    </S.MainWrapper>
  );
};

export default Main;
