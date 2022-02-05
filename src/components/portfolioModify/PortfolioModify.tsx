import React, { useEffect } from "react";
import { Footer, Header } from "..";
import * as S from "./style";
import TitleContainer from "./titleContainer/TitleContainer";
import MoreInfoContainer from "./moreInfoContainer/MoreInfoContainer";
import ImageContainerList from "./imageContainerList/ImageContainerList";
import LicenseContainer from "./licenseContainer/LicenseContainer";
import BannerContainer from "./bannerContainer/BannerContainer";
import FileLinkContainer from "./fileLinkContainer/FileLinkContainer";
import PrecautionsContainer from "./precautionsContainer/PrecautionsContainer";
import { useRecoilState } from "recoil";
import { portfolioModifyList } from "../../modules/atom/portfolioModify/index"
import { portfolioModifySubmit } from "../../util/api/portfolio/portfolioModify";
import OptionContainer from "./optionContainer/OptionContainer";
import { ToastError, ToastSuccess } from "../../hook/toastHook";
import { useHistory, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPortfolio } from "../../util/api/portfolio/portfolio";

interface stateType {
  portfolioID: number;
}

const PortfolioModify = () => {
  const [portfolioModifyArr, setPortfolioModifyArr] = useRecoilState(portfolioModifyList);

  const history = useHistory();
  const location = useLocation<stateType>();

  useEffect(() => {
    getPortfolioData(location.state.portfolioID)
  },[location.state.portfolioID])

  const fieldToId = (fieldName:string) => {
    switch (fieldName){
      case "FrontEnd":
        return "1"
      case "SERVER":
        return "2"
      case "ANDROID":
        return "3"
      case "AI":
        return "4"
      case "DATA ANALYSIS":
        return "5"
      case "DESIGN":
        return "6"
      case "DevOps":
        return "7"
    }
  }

  const getPortfolioData = (id:number) => {
    getPortfolio(id)
    .then((res) => {
      console.log(res.data)
      const { title,introduce,field, more_info, container_list, certificate_container_list, link, file,thumbnail} = res.data;
      setPortfolioModifyArr({
        ...portfolioModifyArr,
        title: title,
        introduce: introduce,
        field: field.map((value:string) => {
          return fieldToId(value)
        }),
        more_info: more_info,
        container_list: container_list,
        certificate_container_list: certificate_container_list,
        link: link,
        file: file,
        thumbnail: thumbnail,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const portfolioSubmit = () => {
    portfolioModifySubmit(portfolioModifyArr, location.state.portfolioID) //location id 두 번째 파라미터에 추가하기
      .then(() => {
        ToastSuccess("포트폴리오가 수정되었습니다.");
        setTimeout(() => {
          history.push("/");
        }, 1500);
      })
      .catch((err) => {
        ToastError("포트폴리오 수정에 실패했습니다.");
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(portfolioModifyArr);
  }, [portfolioModifyArr]);

  return (
    <>
      <Header />
      <ToastContainer />
      <S.MainContainer>
        <PrecautionsContainer /> {/* 주의사항을 적는 Text 컴포넌트 */}
        <OptionContainer /> {/* 분야랑 공개 비공개 설정 컴포넌트 */} {/* 수정 완료 */}
        <TitleContainer /> {/* 제목 컴포넌트 */} {/* 수정 완료 */}
        <MoreInfoContainer /> {/*이메일이나 깃허브 넣는 컴포넌트*/} {/* 수정 완료 */}
        <ImageContainerList /> {/* 자신의 경험을 넣을 수 있는 이미지 리스트 */} {/* 수정 완료 */}
        <LicenseContainer /> {/* 자격증을 넣을 수 있는 리스트 */} {/* 수정 완료 */}
        <FileLinkContainer /> {/*파일이나 링크를 넣을 수 있는 컴포넌트 */} {/* 수정 완료 */}
        <BannerContainer /> {/* 이미지 배너 선택하는 컴포넌트 */} {/* 수정 완료 */} 
        <S.FinshButton onClick={portfolioSubmit}>수정완료</S.FinshButton>
      </S.MainContainer>
      <Footer />
    </>
  );
};

export default PortfolioModify;
