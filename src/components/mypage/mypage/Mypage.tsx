/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as S from "./style";
import {
  baseBackground,
  center,
  NavWrapper,
  column,
} from "../../../util/css/mypage/mypage/style";
import {
  myPageSection,
  sectionTitleWrapper,
} from "../../../util/css/mypage/UserPage/style";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import PortfolioList from "../PortfolioList/PortfolioList";
import { Header } from "../..";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  myPortfolioList,
  myPortfolioListSelector,
  myTouchingPortfolioSelector,
} from "../../../modules/atom/mypage/mypage";
import { MyPortfolioType } from "../../../util/interface/MyPage/myPortfolioType";
import { myInfoSelector } from "../../../modules/selector/user";

const MyPage = () => {
  const [isClickMyPortfolio, setIsClickMyPortfolio] = useState<boolean>(true);
  const [isClickMyTouching, setIsClickMyTouching] = useState<boolean>(false);
  const [portfolioList, setPortoflioList] = useRecoilState(myPortfolioList);
  const myPortfolio = useRecoilValue(myPortfolioListSelector);
  const myInfo = useRecoilValue(myInfoSelector);

  const touchPorfolio = useRecoilValue(myTouchingPortfolioSelector);

  useEffect(() => {
    isClickMyPortfolio
      ? setPortoflioList(myPortfolio)
      : setPortoflioList(touchPorfolio);
  }, [isClickMyPortfolio, myPortfolio, setPortoflioList, touchPorfolio]);

  const onClickEvent = (e: any) => {
    const { innerHTML } = e.target;
    if (innerHTML === "나의 포트폴리오") {
      !isClickMyPortfolio && setIsClickMyPortfolio(true);
      setIsClickMyTouching(false);
    } else if (innerHTML === "나의 터칭") {
      !isClickMyTouching && setIsClickMyTouching(true);
      setIsClickMyPortfolio(false);
    }
  };

  return (
    <div css={[baseBackground, column]}>
      <Header></Header>
      <section css={[myPageSection]}>
        <ProfileHeader />
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
          {portfolioList?.length === 0 ? (
            <S.NotText>
              <span>작성된 포트폴리오가 없습니다.</span>
            </S.NotText>
          ) : (
            <>
              {portfolioList?.map((portfolio: MyPortfolioType, index) => (
                <PortfolioList
                  key={index}
                  portfolio={portfolio}
                  isClickMyPortfolio={isClickMyPortfolio}
                  isClickMyTouching={isClickMyTouching}
                  profileimg={myInfo?.profile_img}
                />
              ))}
            </>
          )}
        </article>
      </section>
    </div>
  );
};

export default MyPage;
