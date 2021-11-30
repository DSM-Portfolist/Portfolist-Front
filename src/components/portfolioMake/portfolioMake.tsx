import React from "react";
import { Footer, Header } from "..";
import * as S from "./style";
import TitleContainer from "./titleContainer/TitleContainer";
import MoreInfoContainer from "./moreInfoContainer/MoreInfoContainer";
import ImageContainerList from "./imageContainerList/ImageContainerList";
import LicenseContainer from "./licenseContainer/LicenseContainer";
import BannerContainer from "./bannerContainer/BannerContainer";
import FileLinkContainer from "./fileLinkContainer/FileLinkContainer";
import PrecautionsContainer from "./precautionsContainer/PrecautionsContainer";

const portfolioMake = () => {
  return (
    <>
      <Header />
      <S.MainContainer>
        <PrecautionsContainer /> {/* 주의사항을 적는 Text 컴포넌트 */}
        <TitleContainer /> {/* 제목 컴포넌트 */}
        <MoreInfoContainer />{/*이메일이나 깃허브 넣는 컴포넌트*/}
        <ImageContainerList /> {/* 자신의 경험을 넣을 수 있는 이미지 리스트 */}
        <LicenseContainer /> {/* 자격증을 넣을 수 있는 리스트 */}
        <FileLinkContainer /> {/*파일이나 링크를 넣을 수 있는 컴포넌트 */}
        <BannerContainer /> {/* 이미지 배너 선택하는 컴포넌트 */}
        <S.FinshButton>작성완료</S.FinshButton>
      </S.MainContainer>
      <Footer />
    </>
  );
};

export default portfolioMake;
