/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import {
  myPageSection,
  column,
  baseBackground,
  sectionTitleWrapper,
  center,
} from "../../../util/css/mypage/UserPage/style";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import PortfolioList from "./PortfolioList/PortfolioList";

const UserPage = () => {
  return (
    <div css={[baseBackground, column]}>
      <header></header>
      <section css={[myPageSection]}>
        <ProfileHeader />
        <article>
          <div css={[center, sectionTitleWrapper]}>
            <span>침착맨</span>
            <span>님의 포트폴리오</span>
          </div>
          <PortfolioList />
        </article>
      </section>
    </div>
  );
};

UserPage.defaultProps = {
  portfolioArr: [],
};

export default UserPage;
