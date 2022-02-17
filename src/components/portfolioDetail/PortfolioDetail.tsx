import * as S from "./style";
import Report from "./report/Report";
import QueryString from "query-string";
import { useLocation } from "react-router";
import { useSetRecoilState } from "recoil";
import { Header, Comment, ExperienceList, Footer } from "..";
import { portfolioId } from "../../modules/atom/portfolio";
import CertificateList from "./items/certificate/CertificateList";
import MoreInfo from "./items/moreInfo/MoreInfo";
import PdfFile from "./items/pdfFile";
import TouchingItem from "./items/touching/TouchingItem";
import { portfoilo } from "../../modules/atom/portfolio/portfolioDetail";
import Title from "./items/titleItem";
import { useQuery } from "react-query";
import { getPortfolio } from "../../util/api/portfolio/portfolio";
import { AxiosError } from "axios";
import { ToastError } from "../../hook/toastHook";

const PortfolioDetail = () => {
  const setPortfolioId = useSetRecoilState(portfolioId);
  const setPortfolioValue = useSetRecoilState(portfoilo);

  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  setPortfolioId(id);

  const { data: portfolio } = useQuery(
    ["portfolio_detail", id],
    () => getPortfolio(id),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      onSuccess: (data) => {
        setPortfolioValue(data?.data);
      },
      onError: (error: AxiosError) => {
        const status = error.response?.status;

        if (status === 401) {
          ToastError("로그인 후 이용해주세요.");
        }
      },
    }
  );

  return (
    <>
      <Header />
      <S.DetailWrappper>
        <Title />
        <TouchingItem />
        {portfolio?.data?.more_info?.[0].name && <MoreInfo />}
        {portfolio?.data?.container_list?.[0].container_title && (
          <ExperienceList />
        )}
        {portfolio?.data?.certificate_container_list?.[0].title && (
          <CertificateList />
        )}
        {portfolio?.data?.file && <PdfFile file={portfolio?.data?.file} />}
        <Comment />
      </S.DetailWrappper>
      <Report />
      <Footer />
    </>
  );
};

export default PortfolioDetail;
