/** @jsxImportSource @emotion/react */
import React from "react";
import {
  myPageSection,
  column,
  baseBackground,
  sectionTitleWrapper,
  center,
} from "../../../util/css/mypage/UserPage/style";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import PortfolioList from "../PortfolioList/PortfolioList";
import { Header } from "../..";
import { useRecoilValue } from "recoil";
import {
  userInfoSelector,
  userPortfolioListSelector,
} from "../../../modules/atom/userpage/userpage";
const UserPage = ({ match }: any) => {
  const userPortfolio = useRecoilValue(
    userPortfolioListSelector(match.params.userId)
  );
  const userInfo = useRecoilValue(userInfoSelector(match.params.userId));

  return (
    <div css={[baseBackground, column]}>
      <Header></Header>
      <section css={[myPageSection]}>
        <ProfileHeader userInfo={userInfo} />
        <article>
          <div css={[center, sectionTitleWrapper]}>
            <span>{userInfo.name}</span>
            <span>님의 포트폴리오</span>
          </div>
          {userPortfolio?.map((portfolio, index) => (
            <PortfolioList key={index} portfolio={portfolio} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default UserPage;
