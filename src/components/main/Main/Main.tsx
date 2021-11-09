import {
  Header,
  Banner,
  List,
  MonthPortfolio,
  News,
  Footer,
} from "../../index";
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
      <Footer />
    </S.MainWrapper>
  );
};

export default Main;
