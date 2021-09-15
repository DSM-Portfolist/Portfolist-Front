/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import {
  baseBackground,
  center,
  NavWrapper,
  column,
  row,
} from "../../../util/css/mypage/mypage/style";
import {
  myPageSection,
  sectionTitleWrapper,
} from "../../../util/css/mypage/UserPage/style";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import PortfolioList from "../PortfolioList/PortfolioList";

const MyPage = () => {
  const [isClickMyPortfolio, setIsClickMyPortfolio] = useState<boolean>(true);
  const [isClickMyTouching, setIsClickMyTouching] = useState<boolean>(false);
  console.log(isClickMyPortfolio, isClickMyTouching);
  const onClickEvent = (e: any) => {
    const { innerHTML } = e.target;
    if (innerHTML === "나의 포트폴리오") {
      !isClickMyPortfolio && setIsClickMyPortfolio(true);
      setIsClickMyTouching(false);
    } else if (innerHTML === "나의 터칭") {
      !isClickMyTouching && setIsClickMyTouching(true);
      setIsClickMyPortfolio(false);
    }
    console.log(e);
  };
  return (
    <div css={[baseBackground, column]}>
      <header></header>
      <section css={[myPageSection]}>
        <ProfileHeader isMypage={true} />
        <article>
          <div css={[center, sectionTitleWrapper]}>
            <NavWrapper
              isClickMyPortfolio={isClickMyPortfolio}
              isClickMyTouching={isClickMyTouching}
            >
              <h1 onClick={onClickEvent}>나의 포트폴리오</h1>
              <h1 onClick={onClickEvent}>나의 터칭</h1>
            </NavWrapper>
          </div>
          <PortfolioList
            isClickMyPortfolio={isClickMyPortfolio}
            isClickMyTouching={isClickMyTouching}
          />
        </article>
      </section>
    </div>
  );
};

export default MyPage;
