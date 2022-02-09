import PortfolioList from "../PortfolioList/PortfolioList";
import { Header } from "../..";
import { useRecoilValue } from "recoil";
import {
  userInfoSelector,
  userPortfolioListSelector,
} from "../../../modules/atom/userpage/userpage";
import UserProfileHeader from "../ProfileHeader/UserProfileHeader";
import styled from "@emotion/styled";
import { grayColor } from "../../../util/css/color/color";

const UserPage = ({ match }: any) => {
  const userPortfolio = useRecoilValue(
    userPortfolioListSelector(match.params.userId)
  );
  const userInfo = useRecoilValue(userInfoSelector(match.params.userId));

  return (
    <UserPageContainer>
      <Header />
      <UserPageSection>
        <UserProfileHeader userInfo={userInfo} />
        <article>
          <SectionTitleWrapper>
            <span>{userInfo?.name}</span>
            <span>님의 포트폴리오</span>
          </SectionTitleWrapper>
          {userPortfolio?.length === 0 ? (
            <NotText>
              <span>작성된 포트폴리오가 없습니다.</span>
            </NotText>
          ) : (
            <>
              {userPortfolio?.map((portfolio, index) => (
                <PortfolioList
                  key={index}
                  portfolio={portfolio}
                  profileimg={portfolio?.user?.profile_img}
                />
              ))}
            </>
          )}
        </article>
      </UserPageSection>
    </UserPageContainer>
  );
};

const UserPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const UserPageSection = styled.section`
  width: 750px;
  margin-top: 130px;
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

const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  div {
    font-weight: 700;
    font-size: 17px;
    color: black;
    margin-left: 10px;
  }
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

export default UserPage;
