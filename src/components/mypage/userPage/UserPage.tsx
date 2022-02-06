/** @jsxImportSource @emotion/react */
import * as S from "../mypage/style";
import {
  myPageSection,
  column,
  baseBackground,
  sectionTitleWrapper,
  center,
} from "../../../util/css/mypage/UserPage/style";
import PortfolioList from "../PortfolioList/PortfolioList";
import { Header } from "../..";
import { useRecoilValue } from "recoil";
import {
  userInfoSelector,
  userPortfolioListSelector,
} from "../../../modules/atom/userpage/userpage";
import UserProfileHeader from "../ProfileHeader/UserProfileHeader";

const UserPage = ({ match }: any) => {
  const userPortfolio = useRecoilValue(
    userPortfolioListSelector(match.params.userId)
  );
  const userInfo = useRecoilValue(userInfoSelector(match.params.userId));

  return (
    <div css={[baseBackground, column]}>
      <Header></Header>
      <section css={[myPageSection]}>
        <UserProfileHeader userInfo={userInfo} />
        <article>
          <div css={[center, sectionTitleWrapper]}>
            <span>{userInfo?.name}</span>
            <span>님의 포트폴리오</span>
          </div>
          {userPortfolio?.length === 0 ? (
            <S.NotText>
              <span>작성된 포트폴리오가 없습니다.</span>
            </S.NotText>
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
      </section>
    </div>
  );
};

export default UserPage;
