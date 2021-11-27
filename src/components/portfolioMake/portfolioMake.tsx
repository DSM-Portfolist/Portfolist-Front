import React from "react";
import { Footer, Header } from "..";
import * as S from "./style";
import TitleContainer from "./titleContainer/TitleContainer";
import MoreInfoContainer from "./moreInfoContainer/MoreInfoContainer";
import ImageContainerList from "./imageContainerList/ImageContainerList";
import LicenseContainer from "./licenseContainer/LicenseContainer";
import BannerContainer from "./bannerContainer/BannerContainer";
import FileLinkContainer from "./fileLinkContainer/FileLinkContainer";

const portfolioMake = () => {
  return (
    <>
      <Header />
      <S.MainContainer>
        <p className="caution">
          파일 혹은 링크 첨부로 포트폴리오를 업로드하실 경우 제목과 본인 소개를
          필수로 작성해 주세요.
        </p>
        <TitleContainer /> {/* 제목 컴포넌트 */}
        <MoreInfoContainer />{/*이메일이나 깃허브 넣는 컴포넌트*/}
        <ImageContainerList /> {/* 자신의 경험을 넣을 수 있는 이미지 리스트 */}
        <LicenseContainer /> {/* 자격증을 넣을 수 있는 리스트 */}
        <FileLinkContainer /> {/*파일이나 링크를 넣을 수 있는 컴포넌트 */}
        <BannerContainer />
        <S.FinshButton>작성완료</S.FinshButton>
      </S.MainContainer>
      <Footer />
    </>
  );
};

export default portfolioMake;
