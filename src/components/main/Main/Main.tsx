import react from "react";
import { Header, Banner } from "../../index";
import * as S from "./style";

const Main = () => {
  return (
    <S.MainWrapper>
      <Header />
      <Banner></Banner>
    </S.MainWrapper>
  );
};

export default Main;
