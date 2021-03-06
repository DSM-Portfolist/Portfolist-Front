/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
import { portfolioModifyList } from "../../modules/atom/portfolioEdit/index";
import { portfolioModifySubmit } from "../../util/api/portfolio/portfolioModify";
import OptionContainer from "./optionContainer/OptionContainer";
import { ToastError, ToastSuccess } from "../../hook/toastHook";
import { useHistory, useLocation } from "react-router";
import { getPortfolio } from "../../util/api/portfolio/portfolio";
import QueryString from "query-string";
import { useMutation, useQueryClient } from "react-query";
import { fieldToId } from "../../hook/fieldNameToIdHook";

interface stateType {
  portfolioID: number;
}

const PortfolioEdit = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const [portfolioModifyArr, setPortfolioModifyArr] =
    useRecoilState(portfolioModifyList);

  const location = useLocation<stateType>();
  const query = QueryString.parse(location.search);

  const getPortfolioData = (id: number) => {
    getPortfolio(id)
      .then((res) => {
        const {
          title,
          introduce,
          field,
          more_info,
          container_list,
          link,
          file,
          thumbnail,
        } = res.data;
        let { certificate_container_list } = res.data;
        setIsOpen(res.data.open);

        certificate_container_list = certificate_container_list.map(
          (value: any) => {
            if (value.certificate_list.length <= 0) {
              return { title: value.title, certificate_list: [""] };
            } else {
              return value;
            }
          }
        );

        setPortfolioModifyArr({
          ...portfolioModifyArr,
          title: title,
          introduce: introduce,
          field: field.map((value: string) => {
            return fieldToId(value);
          }),
          more_info: more_info,
          container_list: container_list,
          certificate_container_list: certificate_container_list,
          link: link,
          file: file,
          thumbnail: thumbnail,
          open: res.data.open,
        });
      })
  };

  const { mutate: patchPortfolio } = useMutation(
    () => portfolioModifySubmit(portfolioModifyArr, Number(query.id)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("portfolio_detail");
        queryClient.invalidateQueries("portfolio_list");
        ToastSuccess("?????????????????? ?????????????????????.");
        setTimeout(() => {
          history.push(`/portfolio?id=${Number(query.id)}`);
        }, 1500);
      },
      onError: () => {
        ToastError("??????????????? ????????? ??????????????????.");
      },
    }
  );

  useEffect(() => {
    console.log(portfolioModifyArr);
    getPortfolioData(Number(query.id));
  }, [query.id]);

  return (
    <>
      <Header />
      <S.MainContainer>
        <PrecautionsContainer /> {/* ??????????????? ?????? Text ???????????? */}
        <OptionContainer isOpen={isOpen} />
        {/* ????????? ?????? ????????? ?????? ???????????? */}
        <TitleContainer /> {/* ?????? ???????????? */}
        <MoreInfoContainer /> {/*??????????????? ????????? ?????? ????????????*/}
        <ImageContainerList /> {/* ????????? ????????? ?????? ??? ?????? ????????? ????????? */}
        <LicenseContainer /> {/* ???????????? ?????? ??? ?????? ????????? */}
        <FileLinkContainer /> {/*???????????? ????????? ?????? ??? ?????? ???????????? */}
        <BannerContainer /> {/* ????????? ?????? ???????????? ???????????? */}
        <S.FinshButton onClick={() => patchPortfolio()}>????????????</S.FinshButton>
      </S.MainContainer>
      <Footer />
    </>
  );
};

export default PortfolioEdit;
