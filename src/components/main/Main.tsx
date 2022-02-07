import { Header, Banner, MonthPortfolio, News, Footer } from "../index";
import FilterBar from "./filterBar/FilterBar";
import Introduce from "./introduce/Introduce";
import List from "./portList";
import * as S from "./style";

const Main = () => {
  const token = localStorage.getItem("access_token_portfolist");

  return (
    <S.MainWrapper>
      <Header />
      <Banner />
      <FilterBar />
      <List />
      <MonthPortfolio />
      <Introduce />
      {token && <News />}
      <Footer />
    </S.MainWrapper>
  );
};

export default Main;
