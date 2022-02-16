import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Footer, Header } from "..";
import { useRecoilState, useRecoilValue } from "recoil";
import { grayColor } from "../../util/css/color/color";
import {
  myPortfolioList,
  myPortfolioListSelector,
  myTouchingPortfolioSelector,
} from "../../modules/atom/mypage/mypage";
import { getUser } from "../../util/api/user/info";
import { useQuery } from "react-query";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { NavWrapper } from "../../util/css/mypage/mypage/style";
import { MyPortfolioType } from "../../util/interface/MyPage/myPortfolioType";
import PortfolioListItem from "./PortfolioList/PortfolioList";

const MyPage = () => {
  const [isClickMyPortfolio, setIsClickMyPortfolio] = useState<boolean>(true);
  const [isClickMyTouching, setIsClickMyTouching] = useState<boolean>(false);
  const [portfolioList, setPortoflioList] = useRecoilState(myPortfolioList);
  const myPortfolio = useRecoilValue(myPortfolioListSelector);
  const touchPorfolio = useRecoilValue(myTouchingPortfolioSelector);

  const { data: user } = useQuery(["user"], () => getUser(), {
    keepPreviousData: true,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

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
    <MyPageContainer>
      <Header />
      <MyPageSection>
        <ProfileHeader user={user?.data} />
        <article>
          <PortfolioContainer>
            <NavWrapper
              isClickMyPortfolio={isClickMyPortfolio}
              isClickMyTouching={isClickMyTouching}
            >
              <h1 onClick={onClickEvent}>나의 포트폴리오</h1>
              <h1 onClick={onClickEvent}>나의 터칭</h1>
            </NavWrapper>
          </PortfolioContainer>
          {portfolioList?.length === 0 ? (
            <NotText>
              <span>작성된 포트폴리오가 없습니다.</span>
            </NotText>
          ) : (
            <>
              {portfolioList?.map((portfolio: MyPortfolioType, index) => (
                <PortfolioListItem
                  key={index}
                  portfolio={portfolio}
                  isClickMyPortfolio={isClickMyPortfolio}
                  isClickMyTouching={isClickMyTouching}
                  profileimg={
                    isClickMyPortfolio
                      ? user?.data?.profile_img
                      : portfolio?.user?.profile_img
                  }
                />
              ))}
            </>
          )}
        </article>
      </MyPageSection>
      <Footer />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPageSection = styled.section`
  width: 750px;
  margin-top: 130px;
`;

const PortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 150px;
  & span {
    font-size: 24px;
    line-height: 35px;
  }
  & span:first-of-type {
    font-weight: bold;
  }
  & span:nth-of-type(2) {
    font-weight: 500;
  }
`;

const NotText = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${grayColor};
  font-size: 20px;
  padding: 50px 0;
  font-weight: 500;
`;

export default MyPage;
